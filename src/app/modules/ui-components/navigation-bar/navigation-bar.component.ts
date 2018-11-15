import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationBarComponent {
  @Output() itemClicked = new EventEmitter<number>();
  @Input() items: string[];

  selectedItem = 0;

  constructor(private cdRef: ChangeDetectorRef) { }

  onItemClick(index) {
    this.selectedItem = index;
    this.cdRef.detectChanges();
    this.itemClicked.emit(index);
  }
}
