import { Component, ChangeDetectionStrategy, Input, ChangeDetectorRef, OnChanges } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';

import { Team } from 'src/app/interfaces/team';
import { Standings } from 'src/app/interfaces/standings';
import { Subscription } from 'rxjs';
import { BaseCompetition } from '../../interfaces/baseCompetition';

@Component({
  selector: 'app-team-overview',
  templateUrl: './team-overview.component.html',
  styleUrls: ['./team-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamOverviewComponent implements OnChanges {
  @Input() team: Team;
  @Input() baseCompetition: BaseCompetition;

  standings: Standings;

  constructor(private httpService: HttpService,
    private cdRef: ChangeDetectorRef) {
    this.cdRef.detach();
  }

  ngOnChanges() {
    const subscription: Subscription = this.httpService.getStandings(this.baseCompetition.id).subscribe({
      next: res => this.standings = res.standings[0],
      error: console.error,
      complete: () => {
        subscription.unsubscribe();
        this.cdRef.detectChanges();
      }
    });
  }
}
