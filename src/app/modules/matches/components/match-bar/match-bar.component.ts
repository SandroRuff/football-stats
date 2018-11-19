import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image/image.service';

import { Match } from 'src/app/interfaces/match';
import { MatchesService } from '../../services/matches.service';

@Component({
  selector: 'app-match-bar',
  templateUrl: './match-bar.component.html',
  styleUrls: ['./match-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchBarComponent implements OnInit {
  @Input() match: Match;
  @Input() teamId: number;
  @Input() index: number;

  currentClass: string;
  winStateClass: string;

  constructor(private imageService: ImageService,
    private matchesService: MatchesService) { }

  ngOnInit() {
    this.currentClass = `-${this.match.commonStatus.toLowerCase()}`;
    this.winStateClass = `-${this.setWinState()}`;
  }

  getCompetitionIconPath(competitionId) {
    return this.imageService.getCompetitionIconPath(competitionId);
  }
  getTeamIconPath(teamType) {
    return this.imageService.getTeamIconPath(this.match['' + teamType + 'Team']['id']);
  }

  isHomeWinner(obj) {
    return this.matchesService.isHomeWinner(obj);
  }
  isAwayWinner(obj) {
    return this.matchesService.isAwayWinner(obj);
  }

  getCurrentTime(startTime: Date) {
    return this.matchesService.getCurrentTime(startTime);
  }

  dayPipe() {
    return this.matchesService.dayPipe(this.match.utcDate);
  }

  setWinState() {
    return this.matchesService.setWinState(this.match, this.teamId);
  }
}
