import { Component, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';

import { Player } from 'src/app/interfaces/player';
import { TeamService } from '../../../services/team.service';

@Component({
  selector: 'app-squad-players',
  templateUrl: './squad-players.component.html',
  styleUrls: ['./squad-players.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SquadPlayersComponent implements OnChanges {
  @Input() squad: Player[];

  groupedSquad: any;

  constructor(private teamService: TeamService) { }

  ngOnChanges() {
    this.groupedSquad = this.teamService.groupSquad(this.squad);
  }
}
