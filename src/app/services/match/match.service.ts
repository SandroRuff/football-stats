import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor() { }

  // Finihed
  isHomeWinner(obj) {
    return obj === 'HOME_TEAM';
  }
  isAwayWinner(obj) {
    return obj === 'AWAY_TEAM';
  }
  // Live
  getCurrentTime(startTime: Date): [number | string, boolean] {
    startTime = new Date(startTime);
    let time = Math.ceil((new Date().getTime() - startTime.getTime()) / 1000 / 60);
    if (time > 50) {
      time -= 20;
      if (time > 90) {
        return [`90+${time - 90}`, true];
      }
      return [time, true];
    }
    if (time > 45) {
      return [`45+${time - 45}`, false];
    }
    return [time, false];
  }
  // Pipes
  timePipe(time: string): string {
    const minute: string = time.slice(14, 16);
    let hour: string | number = time.slice(11, 13);
    if (+hour > 12) {
      hour = +hour - 12;
      return `${hour}:${minute} PM`;
    } else {
      return `${hour}:${minute} AM`;
    }
  }
  dayPipe(date): string {
    return formatDate(date, 'MM/dd', 'en');
  }
}
