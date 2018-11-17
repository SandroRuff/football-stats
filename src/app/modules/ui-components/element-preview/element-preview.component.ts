import { Component, Input } from '@angular/core';
import { ImageService } from 'src/app/services/image/image.service';

import { Team } from 'src/app/interfaces/team';
import { Player } from 'src/app/interfaces/player';

@Component({
  selector: 'app-element-preview',
  templateUrl: './element-preview.component.html',
  styleUrls: ['./element-preview.component.scss']
})
export class ElementPreviewComponent {
  @Input() type: string;
  @Input() element: Team | Player;
  @Input() baseQuery: { id: number; name: string };

  constructor(private imageService: ImageService) { }

  getImagePath() {
    if (this.type === 'team') {
      return this.imageService.getTeamIconPath(this.element.id);
    } else if (this.type === 'player') {
      return this.imageService.getPlayerIconPath(this.element.id);
    }
  }
}
