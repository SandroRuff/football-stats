import { Component, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { TeamService } from '../../team-info/services/team.service';

import { Player } from 'src/app/interfaces/player';

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
