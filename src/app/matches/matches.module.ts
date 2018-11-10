import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchesComponent } from './matches.component';
import { MatchesContainerComponent } from './matches-container/matches-container.component';
import { CompetitionTitleBarComponent } from './competition-title-bar/competition-title-bar.component';
import { MatchesService } from './matches.service';
import { MatchComponent } from './match/match.component';
import { RouterModule } from '@angular/router';
import { DataLoadingIndicatorComponent } from '../data-loading-indicator/data-loading-indicator.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    MatchesComponent,
    MatchesContainerComponent,
    CompetitionTitleBarComponent,
    MatchComponent,
    DataLoadingIndicatorComponent
  ],
  providers: [MatchesService]
})
export class MatchesModule { }
