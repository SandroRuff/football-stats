import { Component, Input } from '@angular/core';
import { ImageService } from 'src/app/services/image/image.service';

@Component({
  selector: 'app-competition-title-bar',
  templateUrl: './competition-title-bar.component.html',
  styleUrls: ['./competition-title-bar.component.scss']
})
export class CompetitionTitleBarComponent {

  @Input() competition: object;

  constructor(private imageService: ImageService) { }

  getAreaIconPath() {
    return this.imageService.getAreaIconPath(this.competition['area']);
  }
}
