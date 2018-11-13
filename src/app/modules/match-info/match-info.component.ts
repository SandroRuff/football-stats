import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchInfoService } from './services/match-info.service';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.scss']
})
export class MatchInfoComponent implements OnInit {

  id: number;
  match: object;

  constructor(private ar: ActivatedRoute,
    private matchInfoService: MatchInfoService) {
    ar.params.subscribe(param => this.id = param.id);
  }

  ngOnInit() {
    const subscribtions = this.matchInfoService.getMatch(this.id)
      .subscribe(res => console.log(res));
  }

}
