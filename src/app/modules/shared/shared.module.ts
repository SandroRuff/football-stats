import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataLoadingIndicatorComponent } from '../ui-components/data-loading-indicator/data-loading-indicator.component';
import { ElementPreviewComponent } from '../ui-components/element-preview/element-preview.component';
import { ElementsListComponent } from '../ui-components/elements-list/elements-list.component';
import { SectionBarWithSelectionComponent } from '../ui-components/section-bar-with-selection/section-bar-with-selection.component';
import { SelectionsListComponent } from '../ui-components/selections-list/selections-list.component';
import { NavigationBarComponent } from '../ui-components/navigation-bar/navigation-bar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    DataLoadingIndicatorComponent,
    ElementPreviewComponent,
    ElementsListComponent,
    SectionBarWithSelectionComponent,
    SelectionsListComponent,
    NavigationBarComponent
  ],
  exports: [
    DataLoadingIndicatorComponent,
    ElementPreviewComponent,
    ElementsListComponent,
    SectionBarWithSelectionComponent,
    SelectionsListComponent,
    NavigationBarComponent
  ]
})
export class SharedModule { }
