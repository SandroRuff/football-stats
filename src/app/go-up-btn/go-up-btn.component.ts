import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-go-up-btn',
  templateUrl: './go-up-btn.component.html',
  styleUrls: ['./go-up-btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoUpBtnComponent {
  isGoUpBtnVisible = false;

  constructor(private cdRef: ChangeDetectorRef) { }

  source = fromEvent(window, 'scroll').subscribe(() => {
    if (!this.isGoUpBtnVisible && document.documentElement.scrollTop > document.documentElement.clientHeight / 2) {
      this.isGoUpBtnVisible = true;
      this.cdRef.detectChanges();
    } else if (this.isGoUpBtnVisible && document.documentElement.scrollTop < document.documentElement.clientHeight / 2) {
      this.isGoUpBtnVisible = false;
      this.cdRef.detectChanges();
    }
  });

  goUp() {
    document.documentElement.scrollTop = 0;
  }
}
