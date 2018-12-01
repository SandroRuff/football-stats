import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetitionTitleBarComponent } from './components/competition-title-bar/competition-title-bar.component';
import { MatchesService } from './services/matches.service';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MatchComponent } from './components/match/match.component';
import { MatchBarComponent } from './components/match-bar/match-bar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    CompetitionTitleBarComponent,
    MatchComponent,
    MatchBarComponent
  ],
  exports: [
    CompetitionTitleBarComponent,
    MatchComponent,
    MatchBarComponent
  ],
  providers: [MatchesService]
})
export class MatchesModule { }
