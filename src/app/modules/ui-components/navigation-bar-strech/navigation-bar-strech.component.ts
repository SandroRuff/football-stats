import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation-bar-strech',
  templateUrl: './navigation-bar-strech.component.html',
  styleUrls: ['./navigation-bar-strech.component.scss']
})
export class NavigationBarStrechComponent {
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
