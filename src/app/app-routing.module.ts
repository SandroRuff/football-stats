import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchInfoComponent } from './modules/match-info/match-info.component';
import { TeamInfoComponent } from './modules/team-info/team-info.component';
import { CompetitionInfoComponent } from './modules/competition-info/competition-info.component';
import { PlayerInfoComponent } from './modules/player-info/player-info.component';
import { MatchdayComponent } from './modules/matchday/matchday.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'matchday' },
  { path: 'matchday', component: MatchdayComponent },
  { path: 'matches/:id', component: MatchInfoComponent },
  { path: 'competition/:id', component: CompetitionInfoComponent },
  { path: 'team/:id', component: TeamInfoComponent, runGuardsAndResolvers: 'paramsChange' },
  { path: 'player/:id', component: PlayerInfoComponent, runGuardsAndResolvers: 'paramsChange' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
