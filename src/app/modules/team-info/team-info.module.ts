import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamInfoComponent } from './team-info.component';
import { RouterModule } from '@angular/router';
import { HierarchyBarComponent } from './components/hierarchy-bar/hierarchy-bar.component';
import { NavigationBarComponent } from '../ui-components/navigation-bar/navigation-bar.component';
import { SectionBarComponent } from '../ui-components/section-bar/section-bar.component';
import { MatchesSetComponent } from './components/team-overview/matches-set/matches-set.component';
import { SharedModule } from '../shared/shared.module';
import { TeamOverviewComponent } from './components/team-overview/team-overview.component';
import { MatchesModule } from '../matches/matches.module';
import { SquadModule } from '../squad/squad.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatchesModule,
    SquadModule
  ],
  declarations: [
    TeamInfoComponent,
    HierarchyBarComponent,
    NavigationBarComponent,
    SectionBarComponent,
    MatchesSetComponent,
    TeamOverviewComponent
  ]
})
export class TeamInfoModule { }
