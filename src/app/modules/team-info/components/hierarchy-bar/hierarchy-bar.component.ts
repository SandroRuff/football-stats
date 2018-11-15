import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnChanges } from '@angular/core';

import { Team } from 'src/app/interfaces/team';
import { ImageService } from 'src/app/services/image/image.service';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-hierarchy-bar',
  templateUrl: './hierarchy-bar.component.html',
  styleUrls: ['./hierarchy-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HierarchyBarComponent implements OnChanges {
  @Input() team: Team;
  @Input() baseCompetition: { id: number; name: string };

  constructor(private imageService: ImageService,
    private httpService: HttpService,
    private cdRef: ChangeDetectorRef) {
    cdRef.detach();
  }

  ngOnChanges() {
    this.cdRef.detectChanges();
  }

  getIconPath(type) {
    switch (type) {
      case 'area': return this.imageService.getAreaIconPath(this.team.area.name);
      case 'competition': return this.imageService.getCompetitionIconPath(this.baseCompetition.id);
      case 'team': return this.imageService.getTeamIconPath(this.team.id);
    }
  }
  getImageErrorHandler(target) {
    this.imageService.getImageErrorHandler(target);
  }
}