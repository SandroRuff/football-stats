import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/app/interfaces/player';

@Component({
  selector: 'app-squad-statistics',
  templateUrl: './squad-statistics.component.html',
  styleUrls: ['./squad-statistics.component.scss']
})
export class SquadStatisticsComponent implements OnInit {
  @Input() squad: Player[];

  constructor() { }

  ngOnInit() {
  }

}
