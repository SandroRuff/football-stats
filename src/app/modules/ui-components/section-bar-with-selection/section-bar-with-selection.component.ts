import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-section-bar-with-selection',
  templateUrl: './section-bar-with-selection.component.html',
  styleUrls: ['./section-bar-with-selection.component.scss']
})
export class SectionBarWithSelectionComponent {
  @Output() elementSelected = new EventEmitter<number>();
  @Input() title: string;
  @Input() elements: any[];
  @Input() elementsTitle: string;

  onElementClick(elementId) {
    this.elementSelected.emit(elementId);
  }
}
