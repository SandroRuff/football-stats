import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private defaultTeamIconPath = 'src/assets/img/teams/default.png';

  constructor() { }

  getAreaIconPath(name: string): string {
    return `src/assets/img/area/${name}/24.png`;
  }
  getCompetitionIconPath(id: number): string {
    return `src/assets/img/league/${id}.png`;
  }
  getTeamIconPath(id: number): string {
    return `src/assets/img/teams/${id}.png`;
  }
  getPlayerIconPath(id: number): string {
    return ``;
  }

  getImageErrorHandler(target) {
    console.log('Image was replaced.');
    target.src = this.defaultTeamIconPath;
  }
}
