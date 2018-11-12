import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchInfoService {

  headers: HttpHeaders = new HttpHeaders().set('X-Auth-Token', '7de3a032a5d441d69ea1e4ad478b0b53');
  url = 'http://api.football-data.org';

  constructor(private http: HttpClient) { }

  getMatch(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/v2/matches/${id}`, { headers: this.headers });
  }
}
