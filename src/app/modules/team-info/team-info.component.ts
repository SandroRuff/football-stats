import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.scss']
})
export class TeamInfoComponent {
  team: object;
  competition: object;

  constructor(private ar: ActivatedRoute,
    private httpService: HttpService) {
    this.ar.params.subscribe(param => httpService.getTeam(param.id).subscribe(res => this.team = res));
  }
}
