import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  isLeagueSetVisible = false;
  leagueSet: object[];

  constructor(private httpService: HttpService) {
    this.httpService.getAllCompetitions().subscribe(res => this.leagueSet = res['competitions']);
  }

  showLeagueSet() {
    this.isLeagueSetVisible = true;
  }

  hideLeagueSet($event) {
    if ($event.relatedTarget !== null && $event['clientY'] >= 0 && !($event.relatedTarget['attributes']['_ngcontent-c4'])) {
      this.isLeagueSetVisible = false;
    }
  }
}
