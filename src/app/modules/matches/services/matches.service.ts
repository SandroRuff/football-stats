import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  constructor() { }

  // Days
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
}
