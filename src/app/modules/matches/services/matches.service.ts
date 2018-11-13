import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  headers: HttpHeaders = new HttpHeaders().set('X-Auth-Token', '7de3a032a5d441d69ea1e4ad478b0b53');
  url = 'http://api.football-data.org';

  // Areas                                               !!!NEED TO BE REPLACED
  areas: object[] = [
    { 'id': 2000, 'name': 'World', 'rank': 1 },
    { 'id': 2001, 'name': 'Europe', 'rank': 1 },
    { 'id': 2002, 'name': 'Germany', 'rank': 1 },
    { 'id': 2003, 'name': 'Netherlands', 'rank': 1 },
    { 'id': 2013, 'name': 'Brazil', 'rank': 1 },
    { 'id': 2014, 'name': 'Spain', 'rank': 1 },
    { 'id': 2015, 'name': 'France', 'rank': 1 },
    { 'id': 2016, 'name': 'England', 'rank': 2 },
    { 'id': 2017, 'name': 'Portugal', 'rank': 1 },
    { 'id': 2018, 'name': 'Europe', 'rank': 1 },
    { 'id': 2019, 'name': 'Italy', 'rank': 1 },
    { 'id': 2021, 'name': 'England', 'rank': 1 }
  ];

  constructor(private http: HttpClient) { }

  // Matches
  getAllMatches(date: string): Observable<any> {
    return this.http.get<any>(`${this.url}/v2/matches?dateFrom=${date}&dateTo=${date}`, { headers: this.headers })
      // Filtering
      .pipe(
        map(res => res['matches']),
        // Add SubData
        map(res => res.map(item => {
          const area: object = this.getArea(item.competition.id);
          item.competition['area'] = area['name']; // Add Area Name
          item.competition['rank'] = area['rank']; // Add Competition Rank
          if (item.status === 'IN_PLAY' || item.status === 'PAUSED') {
            item['commonStatus'] = 'LIVE';
          } else {
            item['commonStatus'] = item.status;
          }
          return item;
        })),
        // Group Matches By Date For Sort
        map(res => {
          const tempObj = [];
          res.forEach(item => {
            if (!tempObj.hasOwnProperty(item.utcDate)) {
              tempObj[item.utcDate] = [item];
            } else {
              tempObj[item.utcDate].push(item);
            }
          });
          return tempObj;
        }),
        // Sorting
        map(res => {
          // By Area
          for (const key in res) {
            res[key].sort((a, b) => this.sortByArea(a, b));
          }
          // By Rank
          for (const key in res) {
            res[key].sort((a, b) => this.sortByRank(a, b));
          }
          return res;
        }),
        // UnGroup Matches
        map(res => {
          const tempArray = [];
          for (const key in res) {
            res[key].forEach(item => tempArray.push(item));
          }
          return tempArray;
        }),
        // Group By Competition
        map(res => {
          const tempArray = [];
          if (res.length) {
            res.forEach((item, index) => {
              if (index === 0) {
                tempArray.push([item]);
              } else {
                if (item.competition.id === res[index - 1].competition.id) {
                  tempArray[tempArray.length - 1].push(item);
                } else {
                  tempArray.push([item]);
                }
              }
            });
          }
          return tempArray;
        })
      );
  }

  // Methods
  sortByArea(a: object, b: object) {
    if (a['competition']['area'] > b['competition']['area']) {
      return 1;
    }
    if (a['competition']['area'] < b['competition']['area']) {
      return -1;
    }
    return 0;
  }
  sortByRank(a: object, b: object) {
    if (a['competition']['area'] === b['competition']['area']) {
      if (a['competition']['rank'] > b['competition']['rank']) {
        return 1;
      }
      if (a['competition']['rank'] < b['competition']['rank']) {
        return -1;
      }
    }
    return 0;
  }
  getArea(id: number): object {
    let tempObj: object = {};
    let status = true;
    this.areas.forEach(item => {
      if (item['id'] === id && status) {
        tempObj = item;
        status = true;
      }
    });
    return tempObj;
  }

  // Competitions
  getCompetitions() {
    return this.http.get<object>(`${this.url}/v2/competitions?plan=TIER_ONE`, { headers: this.headers });
  }

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
