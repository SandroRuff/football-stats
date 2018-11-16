import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image/image.service';
import { MatchService } from 'src/app/services/match/match.service';

import { Match } from 'src/app/interfaces/match';

@Component({
  selector: 'app-match-bar',
  templateUrl: './match-bar.component.html',
  styleUrls: ['./match-bar.component.scss', './match-bar.scss', './match-live.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchBarComponent implements OnInit {
  @Input() match: Match;

  currentClass: string;

  constructor(private imageService: ImageService,
    private matchService: MatchService) { }

  ngOnInit() {
    this.currentClass = `-${this.match.commonStatus.toLowerCase()}`;
  }

  getCompetitionIconPath(competitionId) {
    return this.imageService.getCompetitionIconPath(competitionId);
  }
  getTeamIconPath(teamType) {
    return this.imageService.getTeamIconPath(this.match['' + teamType + 'Team']['id']);
  }

  isHomeWinner(obj) {
    return this.matchService.isHomeWinner(obj);
  }
  isAwayWinner(obj) {
    return this.matchService.isAwayWinner(obj);
  }

  getCurrentTime(startTime: Date) {
    return this.matchService.getCurrentTime(startTime);
  }

  dayPipe() {
    return this.matchService.dayPipe(this.match.utcDate);
  }
}
