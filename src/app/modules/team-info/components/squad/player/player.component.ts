import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Player } from 'src/app/interfaces/player';
import { TeamService } from '../../../services/team.service';
import { ImageService } from 'src/app/services/image/image.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerComponent {
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
