import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { Team } from 'src/app/interfaces/team';
import { ImageService } from 'src/app/services/image/image.service';

@Component({
  selector: 'app-team-overview',
  templateUrl: './team-overview.component.html',
  styleUrls: ['./team-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamOverviewComponent {
  @Input() team: Team;
  @Input() baseCompetition: { id: number; name: string };

  constructor(private imageService: ImageService) { }

  getTeamImagePath() {
    return this.imageService.getTeamIconPath(this.team.id);
  }

}
