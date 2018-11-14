import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  getTeamIconPath(id: number): string {
    return `./../../assets/img/teams/${id}.png`;
  }
}
