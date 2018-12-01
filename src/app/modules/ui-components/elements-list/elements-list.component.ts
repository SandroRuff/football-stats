import { Component, Input, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { Team } from 'src/app/interfaces/team';
import { HttpService } from 'src/app/services/http/http.service';
import { ImageService } from 'src/app/services/image/image.service';
import { Player } from 'src/app/interfaces/player';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-elements-list',
  templateUrl: './elements-list.component.html',
  styleUrls: ['./elements-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElementsListComponent implements OnInit {
  @Input() type: string;
  @Input() queryId: number;

  elements: Team[] | Player[];
  isElementsListVisible: boolean;

  constructor(private httpService: HttpService,
    private imageService: ImageService,
    private cdRef: ChangeDetectorRef) {
    this.isElementsListVisible = false;
  }

  ngOnInit() {
    let subscribtion: Subscription;
    const observer = {
      next: res => {
        if (this.type === 'team') {
          this.elements = res;
        } else if (this.type === 'player') {
          this.elements = res.squad;
        }
      },
      error: console.error,
      complete: () => {
        subscribtion.unsubscribe();
        this.cdRef.detectChanges();
      }
    };
    if (this.type === 'team') {
      subscribtion = this.httpService.getAllTeamsInCompetition(this.queryId).subscribe(observer);
    } else if (this.type === 'player') {
      subscribtion = this.httpService.getTeam(this.queryId).subscribe(observer);
    }
  }

  getIconPath(id) {
    if (this.type === 'team') {
      return this.imageService.getTeamIconPath(id);
    } else if (this.type === 'player') {
      return this.imageService.getPlayerIconPath(id);
    }
  }

  onElementsClick() {
    this.isElementsListVisible = !this.isElementsListVisible;
    this.cdRef.detectChanges();
  }
}
