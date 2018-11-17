import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamInfoComponent } from './team-info.component';
import { RouterModule } from '@angular/router';
import { HierarchyBarComponent } from './components/hierarchy-bar/hierarchy-bar.component';
import { NavigationBarComponent } from '../ui-components/navigation-bar/navigation-bar.component';
import { SectionBarComponent } from '../ui-components/section-bar/section-bar.component';
import { FormComponent } from './components/matches/form/form.component';
import { MatchesSetComponent } from './components/matches/matches-set/matches-set.component';
import { SharedModule } from '../shared/shared.module';
import { MatchBarComponent } from './components/matches/match-bar/match-bar.component';
import { TeamOverviewComponent } from './components/team-overview/team-overview.component';
import { SquadStatisticsComponent } from './components/squad/squad-statistics/squad-statistics.component';
import { SquadPlayersComponent } from './components/squad/squad-players/squad-players.component';
import { PlayerComponent } from './components/squad/player/player.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    TeamInfoComponent,
    HierarchyBarComponent,
    NavigationBarComponent,
    SectionBarComponent,
    FormComponent,
    MatchesSetComponent,
    MatchBarComponent,
    TeamOverviewComponent,
    SquadStatisticsComponent,
    SquadPlayersComponent,
    PlayerComponent
  ]
})
export class TeamInfoModule { }
