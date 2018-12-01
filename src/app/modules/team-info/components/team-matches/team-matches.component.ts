import { Component, OnChanges, ChangeDetectionStrategy, Input, ChangeDetectorRef, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { Subscription } from 'rxjs';

import { Match } from 'src/app/interfaces/match';
import { Competition } from 'src/app/interfaces/competition';

@Component({
  selector: 'app-team-matches',
  templateUrl: './team-matches.component.html',
  styleUrls: ['./team-matches.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamMatchesComponent implements OnChanges, OnInit {
  @Input() teamId: number;
  @Input() activeCompetitions: Competition[];

  competitions: Competition[];
  competitionName = 'All Competitions';
  finishedMatches: { 'All Competitions': Match[] } = { 'All Competitions': null };
  scheduledMatches: { 'All Competitions': Match[] } = { 'All Competitions': null };
  navItems: { title: string, isSelected: boolean }[] = [
    { 'title': 'Finished', 'isSelected': true },
    { 'title': 'Scheduled', 'isSelected': false }
  ];

  constructor(private httpService: HttpService,
    private cdRef: ChangeDetectorRef) { }

  ngOnChanges() { }

  ngOnInit() {
    this.competitions = [
      {
        'area': null,
        'code': null,
        'currentSeason': null,
        'id': null, 'name': 'All Competitions',
        'seasons': null
      },
      ...this.activeCompetitions
    ];
    const subscription: Subscription = this.httpService.getAllTeamMatches(this.teamId).subscribe({
      next: matches => this.disptibuteData(matches),
      error: console.error,
      complete: () => {
        subscription.unsubscribe();
        this.cdRef.detectChanges();
      }
    });
  }

  disptibuteData(matches: Match[]) {
    this.finishedMatches['All Competitions'] = matches.filter(match => match.status === 'FINISHED');
    this.scheduledMatches['All Competitions'] = matches.filter(match => match.status === 'SCHEDULED');
    this.fillObject(this.finishedMatches);
    this.fillObject(this.scheduledMatches);
  }

  fillObject(obj: { 'All Competitions': Match[] }) {
    obj['All Competitions'].forEach(match => {
      if (obj.hasOwnProperty(match.competition.name)) {
        obj[match.competition.name].push(match);
      } else {
        obj[match.competition.name] = [match];
      }
    });
  }

  competitionSelected(id: number) {
    const name = this.competitions.filter(match => match.id === id)[0].name;
    if (name === 'All Competitions' || this.httpService.isCompetitionAvailable(id)) {
      this.competitionName = name;
      this.cdRef.detectChanges();
    } else {
      console.log('Competition is not available.');
    }
  }

  onNavItemClick() {
    this.cdRef.detectChanges();
  }
}
