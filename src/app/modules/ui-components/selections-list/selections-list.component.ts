import { Component, OnInit, Input, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selections-list',
  templateUrl: './selections-list.component.html',
  styleUrls: ['./selections-list.component.scss']
})
export class SelectionsListComponent implements OnInit {
  @Output() elementSelected = new EventEmitter<number>();
  @Input() type: string;
  @Input() elements: any[];
  @Input() elementsTitle: string;

  isElementsListVisible: boolean;

  constructor(private cdRef: ChangeDetectorRef) {
    this.isElementsListVisible = false;
  }

  ngOnInit() {
  }

  onElementClick(elementId) {
    this.elementSelected.emit(elementId);
    this.onElementsClick();
  }

  onElementsClick() {
    this.isElementsListVisible = !this.isElementsListVisible;
    this.cdRef.detectChanges();
  }
}
