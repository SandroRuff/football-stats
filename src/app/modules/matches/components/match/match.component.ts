import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image/image.service';
import { Match } from 'src/app/interfaces/match';
import { MatchesService } from '../../services/matches.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss', './match-finished.scss', './match-live.scss', './match-scheduled.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchComponent implements OnInit {
  @Input() match: Match;

  currentClass: string;

  constructor(private imageService: ImageService,
    private matchesService: MatchesService) { }

  ngOnInit() {
    this.currentClass = `-${this.match.commonStatus.toLowerCase()}`;
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

  timePipe(time: string) {
    return this.matchesService.timePipe(time);
  }
}
