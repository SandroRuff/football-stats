import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchdayComponent } from './matchday.component';
import { MatchesContainerComponent } from './matches-container/matches-container.component';
import { MatchesModule } from '../matches/matches.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MatchesModule,
    MatchesModule,
    SharedModule
  ],
  declarations: [
    MatchdayComponent,
    MatchesContainerComponent
  ]
})
export class MatchdayModule { }
