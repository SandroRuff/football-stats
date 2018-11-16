import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchesComponent } from './matches.component';
import { MatchesContainerComponent } from './components/matches-container/matches-container.component';
import { CompetitionTitleBarComponent } from './components/competition-title-bar/competition-title-bar.component';
import { MatchesService } from './services/matches.service';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MatchComponent } from './components/match/match.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    MatchesComponent,
    MatchesContainerComponent,
    CompetitionTitleBarComponent,
    MatchComponent
  ],
  providers: [MatchesService]
})
export class MatchesModule { }
