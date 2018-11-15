import { Component, Input, ChangeDetectionStrategy, OnChanges, ChangeDetectorRef } from '@angular/core';
import { Team } from 'src/app/interfaces/team';
import { HttpService } from 'src/app/services/http/http.service';
import { ImageService } from 'src/app/services/image/image.service';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamsListComponent implements OnChanges {
  @Input() competitionId: number;

  teams: Team[];
  isTeamsListVisible: boolean;

  constructor(private httpService: HttpService,
    private imageService: ImageService,
    private cdRef: ChangeDetectorRef) {
    this.isTeamsListVisible = false;
  }

  ngOnChanges() {
    const subscribtion = this.httpService.getAllTeamsInCompetition(this.competitionId).subscribe({
      next: res => this.teams = res,
      error: console.error,
      complete: () => {
        subscribtion.unsubscribe();
        this.cdRef.detectChanges();
      }
    });
  }

  getTeamIconPath(id) {
    return this.imageService.getTeamIconPath(id);
  }

  onTeamsClick() {
    this.isTeamsListVisible = !this.isTeamsListVisible;
    this.cdRef.detectChanges();
  }
}
