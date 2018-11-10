import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-competition-title-bar',
  templateUrl: './competition-title-bar.component.html',
  styleUrls: ['./competition-title-bar.component.scss']
})
export class CompetitionTitleBarComponent {

  @Input() competition: object;

}
