import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Input, OnChanges } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';

import { Competition } from 'src/app/interfaces/competition';
import { Standings } from 'src/app/interfaces/standings';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-team-tables',
  templateUrl: './team-tables.component.html',
  styleUrls: ['./team-tables.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamTablesComponent implements OnChanges {
  @Input() competitions: Competition[];
  @Input() baseCompetitionId: number;
  @Input() teamId: number;

  standingsArr: Standings[];
  competitionName: string;

  navItems: { title: string, isSelected: boolean }[] = [
    { 'title': 'Total', 'isSelected': true },
    { 'title': 'Home', 'isSelected': false },
    { 'title': 'Away', 'isSelected': false }
  ];
  constructor(private cdRef: ChangeDetectorRef,
    private httpService: HttpService,
    private teamService: TeamService) {
    cdRef.detach();
  }

  ngOnChanges() {
    this.loadData(this.baseCompetitionId);
  }
  onNavItemClick() {
    this.cdRef.detectChanges();
  }
  competitionSelected(id) {
    this.loadData(id);
  }

  loadData(competitionId: number) {
    if (this.httpService.isCompetitionAvailable(competitionId)) {
      const subscription = this.httpService.getStandings(competitionId).subscribe({
        next: res => {
          this.competitionName = res.competition.name;
          if (res.standings[0].stage === 'REGULAR_SEASON') {
            this.standingsArr = res.standings;
          } else if (res.standings[0].stage === 'GROUP_STAGE') {
            this.standingsArr = this.teamService.getTeamGroupStandings(res.standings, this.teamId);
          }
        },
        error: console.error,
        complete: () => {
          subscription.unsubscribe();
          this.cdRef.detectChanges();
        }
      });
    } else {
      console.log('Competition is not available.');
    }
  }
}
