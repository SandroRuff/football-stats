import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Team } from '../../interfaces/team';
import { Match } from '../../interfaces/match';
import { Competition } from 'src/app/interfaces/competition';
import { StandingsRes } from 'src/app/interfaces/standingsRes';
import { AvailableCompetition } from 'src/app/interfaces/availableCompetitions';

interface MatchesResponse {
  count: number;
  filters: {};
  matches: Match[];
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  headers: HttpHeaders = new HttpHeaders().set('X-Auth-Token', '7de3a032a5d441d69ea1e4ad478b0b53');
  url = 'https://api.football-data.org';

  // Areas
  availableCompetitions: AvailableCompetition[] = [
    { 'id': 2000, 'name': 'World', 'rank': 1, 'isChampionship': false },
    { 'id': 2001, 'name': 'Europe', 'rank': 1, 'isChampionship': false },
    { 'id': 2002, 'name': 'Germany', 'rank': 1, 'isChampionship': true },
    { 'id': 2003, 'name': 'Netherlands', 'rank': 1, 'isChampionship': true },
    { 'id': 2013, 'name': 'Brazil', 'rank': 1, 'isChampionship': true },
    { 'id': 2014, 'name': 'Spain', 'rank': 1, 'isChampionship': true },
    { 'id': 2015, 'name': 'France', 'rank': 1, 'isChampionship': true },
    { 'id': 2016, 'name': 'England', 'rank': 2, 'isChampionship': true },
    { 'id': 2017, 'name': 'Portugal', 'rank': 1, 'isChampionship': true },
    { 'id': 2018, 'name': 'Europe', 'rank': 1, 'isChampionship': false },
    { 'id': 2019, 'name': 'Italy', 'rank': 1, 'isChampionship': true },
    { 'id': 2021, 'name': 'England', 'rank': 1, 'isChampionship': true }
  ];

  constructor(private http: HttpClient) { }

  // Matches
  getAllTeamMatches(id: number): Observable<Match[]> {
    return this.http.get<MatchesResponse>(`${this.url}/v2/teams/${id}/matches`, { headers: this.headers })
      .pipe(
        map(res => res.matches)
      );
  }
  getAllSortedMatches(date: string): Observable<any> {
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
        }),
      );
  }
  getMatchesByPeriod(teamId: number, period: string[]): Observable<Match[]> {
    return this.http.get<MatchesResponse>(`${this.url}/v2/teams/${teamId}/matches?dateFrom=${period[0]}&dateTo=${period[1]}`,
      { headers: this.headers })
      .pipe(
        map(res => res.matches),
        // Add SubData
        map(res => res.map(item => {
          if (item.status === 'IN_PLAY' || item.status === 'PAUSED') {
            item['commonStatus'] = 'LIVE';
          } else {
            item['commonStatus'] = item.status;
          }
          return item;
        }))
      );
  }

  // Competitions
  getAllCompetitions(): Observable<object> {
    return this.http.get<object>(`${this.url}/v2/competitions?plan=TIER_ONE`, { headers: this.headers });
  }
  getCompetition(id: number): Observable<Competition> {
    return this.http.get<Competition>(`${this.url}/v2/competitions/${id}`, { headers: this.headers });
  }
  getStandings(id: number): Observable<StandingsRes> {
    return this.http.get<StandingsRes>(`${this.url}/v2/competitions/${id}/standings`, { headers: this.headers });
  }

  // Team
  getAllTeamsInCompetition(id: number): Observable<Team[]> {
    return this.http.get<any>(`${this.url}/v2/competitions/${id}/teams`, { headers: this.headers })
      .pipe(
        map(res => res.teams),
        map(res => res.sort((a, b) => this.sortByName(a, b)))
      );
  }
  getTeam(id: number): Observable<Team> {
    return this.http.get<Team>(`${this.url}/v2/teams/${id}`, { headers: this.headers });
  }

  // Test
  // getTestData() {
  //   const head = new HttpHeaders().set('X-Originating-IP', '46.216.30.94');
  // tslint:disable-next-line:max-line-length
  //   return this.http.get<any>(`https://api.sportradar.us/soccer-t3/eu/en/schedules/2018-11-25/schedule.json?api_key=3racz766cah2dq65drpcxryc`, { headers: head });
  // }

  // Sort
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
  sortByName(a: Team, b: Team) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  }

  // Area
  getArea(id: number): object {
    let tempObj: object = {};
    let status = true;
    this.availableCompetitions.forEach(item => {
      if (item['id'] === id && status) {
        tempObj = item;
        status = true;
      }
    });
    return tempObj;
  }
  isCompetitionBase(compId: number): boolean {
    return this.availableCompetitions.some(area => area.id === compId && area.isChampionship);
  }
  isCompetitionAvailable(competitionId: number): boolean {
    return this.availableCompetitions.some(competition => competition.id === competitionId);
  }
}
