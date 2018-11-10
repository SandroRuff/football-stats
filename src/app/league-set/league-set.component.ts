import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-league-set',
  templateUrl: './league-set.component.html',
  styleUrls: ['./league-set.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeagueSetComponent {
  @Input() leagueSet;

  getImageUrl(id: number) {
    return `../../assets/img/league/${id}.png`;
  }
}
