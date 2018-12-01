import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamInfoComponent } from './team-info.component';
import { RouterModule } from '@angular/router';
import { HierarchyBarComponent } from './components/hierarchy-bar/hierarchy-bar.component';
import { SectionBarComponent } from '../ui-components/section-bar/section-bar.component';
import { MatchesSetComponent } from './components/team-overview/matches-set/matches-set.component';
import { SharedModule } from '../shared/shared.module';
import { TeamOverviewComponent } from './components/team-overview/team-overview.component';
import { MatchesModule } from '../matches/matches.module';
import { SquadModule } from '../squad/squad.module';
import { TeamDescriptionComponent } from './components/team-description/team-description.component';
import { TeamSquadComponent } from './components/team-squad/team-squad.component';
import { TeamTablesComponent } from './components/team-tables/team-tables.component';
import { TablesModule } from '../tables/tables.module';
import { TeamMatchesComponent } from './components/team-matches/team-matches.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatchesModule,
    SquadModule,
    TablesModule
  ],
  declarations: [
    TeamInfoComponent,
    HierarchyBarComponent,
    SectionBarComponent,
    MatchesSetComponent,
    TeamOverviewComponent,
    TeamDescriptionComponent,
    TeamSquadComponent,
    TeamTablesComponent,
    TeamMatchesComponent
  ]
})
export class TeamInfoModule { }
