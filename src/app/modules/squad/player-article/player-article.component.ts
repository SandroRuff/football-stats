import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Player } from 'src/app/interfaces/player';
import { ImageService } from 'src/app/services/image/image.service';
import { TeamService } from '../../team-info/services/team.service';

@Component({
  selector: 'app-player-article',
  templateUrl: './player-article.component.html',
  styleUrls: ['./player-article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerArticleComponent {
  @Input() player: Player;

  constructor(private teamService: TeamService,
    private imageService: ImageService) { }

  getAreaIconPath() {
    return this.imageService.getAreaIconPath(this.player.nationality);
  }
  getImageErrorHandler(target) {
    this.imageService.getImageErrorHandler(target);
  }

  getAge() {
    return this.teamService.getPlayerAge(this.player.dateOfBirth);
  }

  textPipe(text: string) {
    return this.teamService.textPipe(text);
  }
}
