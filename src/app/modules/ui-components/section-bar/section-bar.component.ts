import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-section-bar',
  templateUrl: './section-bar.component.html',
  styleUrls: ['./section-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionBarComponent {

  @Input() title: string;
}
