import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';
import { Subscription } from 'rxjs';

import { Team } from '../../interfaces/team';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamInfoComponent implements OnInit, OnDestroy {
  team: Team;
  baseCompetition: { id: number; name: string };
  navigationSubscription: Subscription;

  navItems: { title: string, isSelected: boolean }[] = [
    { 'title': 'Overview', 'isSelected': true },
    { 'title': 'Matches', 'isSelected': false },
    { 'title': 'Squad', 'isSelected': false },
    { 'title': 'Information', 'isSelected': false }
  ];

  constructor(private ar: ActivatedRoute,
    private httpService: HttpService,
    private cdRef: ChangeDetectorRef,
    private router: Router) {
    this.cdRef.detach();
    this.getData();
  }

  ngOnInit() {
    this.navigationSubscription = this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.getData();
      }
    });
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  getData() {
    const subscription = this.ar.params.subscribe(param => this.httpService.getTeam(param.id).subscribe({
      next: res => {
        this.team = res;
        console.log(res);
      },
      error: console.error,
      complete: () => {
        this.baseCompetition = this.getBaseCompetition();
        this.cdRef.detectChanges();
        subscription.unsubscribe();
      }
    }));
  }

  getBaseCompetition(): { id: number; name: string; } {
    const comp = this.team.activeCompetitions;
    for (let i = 0; i < comp.length; i++) {
      if (comp[i].area.name === this.team.area.name && this.httpService.isCompetitionBase(comp[i].id)) {
        return {
          id: comp[i].id,
          name: comp[i].name
        };
      }
    }
    return { id: null, name: null };
  }

  onNavItemClick() {
    this.cdRef.detectChanges();
  }
}
