import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerInfoComponent implements OnInit {

  constructor(private ar: ActivatedRoute) {
    const subscription = this.ar.params.subscribe(param => console.log(param));
  }

  ngOnInit() {
  }

}
