import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';
import { Match } from 'src/app/interfaces/match';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  constructor() { }

  isHomeWinner(obj) {
    return obj === 'HOME_TEAM';
  }
  isAwayWinner(obj) {
    return obj === 'AWAY_TEAM';
  }
  // Pipes
  getDays(): string[] {
    const days: string[] = [];
    const timezoneOffset: number = new Date().getTimezoneOffset() * 60000;
    const day = new Date(Date.now() + timezoneOffset);
    day.setDate(day.getDate() - 7);
    let firstDay = day.getDate();
    for (let i = 0; i < 14; i++) {
      if (i !== 0 && day.getDate() === 1) {
        firstDay = -i + 2;
      }
      day.setDate(firstDay + i);
      days.push(new Date(day.getTime() - timezoneOffset).toISOString());
    }
    return days;
  }
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

  setWinState(match: Match, teamId: number): string {
    if (match.status === 'FINISHED') {
      if (match.score.winner === 'HOME_TEAM') {
        if (match.homeTeam.id === teamId) {
          return 'win';
        } else if (match.awayTeam.id === teamId) {
          return 'lose';
        }
      } else if (match.score.winner === 'AWAY_TEAM') {
        if (match.homeTeam.id === teamId) {
          return 'lose';
        } else if (match.awayTeam.id === teamId) {
          return 'win';
        }
      } else {
        return 'draw';
      }
    }
  }
}
