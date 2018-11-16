import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationBarComponent {
  @Output() itemClicked = new EventEmitter<number>();
  @Input() items: { title: string, isSelected: boolean }[];

  selectedItem = 0;

  onItemClick(index) {
    this.items[this.selectedItem].isSelected = false;
    this.items[index].isSelected = true;
    this.selectedItem = index;
    this.itemClicked.emit();
  }
}
