import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchesComponent } from './modules/matches/matches.component';
import { MatchInfoComponent } from './modules/match-info/match-info.component';
import { TeamInfoComponent } from './modules/team-info/team-info.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'matches' },
  { path: 'matches', component: MatchesComponent },
  { path: 'matches/:id', component: MatchInfoComponent },
  { path: 'team/:id', component: TeamInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
