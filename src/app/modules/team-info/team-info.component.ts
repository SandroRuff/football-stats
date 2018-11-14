import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';

import { Team } from '../../interfaces/team';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamInfoComponent {
  team: Team;

  constructor(private ar: ActivatedRoute,
    private httpService: HttpService,
    private cdRef: ChangeDetectorRef) {
    this.cdRef.detach();
    const subscription = this.ar.params.subscribe(param => this.httpService.getTeam(param.id).subscribe({
      next: res => {
        this.team = res;
        console.log(res);
      },
      error: console.error,
      complete: () => {
        this.cdRef.detectChanges();
        subscription.unsubscribe();
      }
    }));
  }
}
