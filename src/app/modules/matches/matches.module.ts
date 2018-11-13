import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchesComponent } from './matches.component';
import { MatchesContainerComponent } from './components/matches-container/matches-container.component';
import { CompetitionTitleBarComponent } from './components/competition-title-bar/competition-title-bar.component';
import { MatchesService } from './services/matches.service';
import { MatchComponent } from './components/match/match.component';
import { RouterModule } from '@angular/router';
import { DataLoadingIndicatorComponent } from '../ui-components/data-loading-indicator/data-loading-indicator.component';

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
