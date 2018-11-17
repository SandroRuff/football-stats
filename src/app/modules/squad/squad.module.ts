import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquadPlayersComponent } from './squad-players/squad-players.component';
import { SquadStatisticsComponent } from './squad-statistics/squad-statistics.component';
import { PlayerArticleComponent } from './player-article/player-article.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    SquadPlayersComponent,
    SquadStatisticsComponent,
    PlayerArticleComponent
  ],
  exports: [
    SquadPlayersComponent,
    SquadStatisticsComponent,
    PlayerArticleComponent
  ]
})
export class SquadModule { }
