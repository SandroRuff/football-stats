import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchesComponent } from './modules/matches/matches.component';
import { MatchInfoComponent } from './modules/match-info/match-info.component';
import { TeamInfoComponent } from './modules/team-info/team-info.component';
import { CompetitionInfoComponent } from './modules/competition-info/competition-info.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'matches' },
  { path: 'matches', component: MatchesComponent },
  { path: 'matches/:id', component: MatchInfoComponent },
  { path: 'competition/:id', component: CompetitionInfoComponent },
  { path: 'team/:id', component: TeamInfoComponent, runGuardsAndResolvers: 'paramsChange' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
