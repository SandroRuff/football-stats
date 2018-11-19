import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { Standings } from 'src/app/interfaces/standings';

@Component({
  selector: 'app-table-total',
  templateUrl: './table-total.component.html',
  styleUrls: ['./table-total.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableTotalComponent implements OnInit {
  @Input() standings: Standings;
  @Input() teamId: number;

  constructor() { }

  ngOnInit() {
  }
}
