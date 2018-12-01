import { Component, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { Team } from 'src/app/interfaces/team';
import { TeamDescription } from '../../interfaces/team-description';
import { ImageService } from 'src/app/services/image/image.service';

@Component({
  selector: 'app-team-description',
  templateUrl: './team-description.component.html',
  styleUrls: ['./team-description.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamDescriptionComponent implements OnChanges {
  @Input() team: Team;

  description: TeamDescription;
  descriptionLength: number;

  constructor(private imageService: ImageService) { }

  ngOnChanges() {
    this.description = {
      country: this.team.area.name,
      shortName: {
        name: this.team.shortName,
        tla: this.team.tla
      },
      founded: this.team.founded,
      activeCompetitions: this.team.activeCompetitions,
      address: this.team.address,
      stadium: this.team.venue,
      website: this.team.website,
      email: this.team.email
    };
    this.descriptionLength = this.getDescriptionLength();
  }

  getAreaIconPath() {
    return this.imageService.getAreaIconPath(this.team.area.name);
  }
  getCompetitionIconPath(id) {
    return this.imageService.getCompetitionIconPath(id);
  }
  getImageErrorHandler(target) {
    return this.imageService.getImageErrorHandler(target);
  }
  getDescriptionLength(): number {
    let acc = 0;
    Object.values(this.description).forEach(item => item ? acc++ : null);
    return acc;
  }
}
