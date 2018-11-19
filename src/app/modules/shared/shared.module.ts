import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataLoadingIndicatorComponent } from '../ui-components/data-loading-indicator/data-loading-indicator.component';
import { ElementPreviewComponent } from '../ui-components/element-preview/element-preview.component';
import { ElementsListComponent } from '../ui-components/elements-list/elements-list.component';
import { NavigationBarStrechComponent } from '../ui-components/navigation-bar-strech/navigation-bar-strech.component';
import { SectionBarWithSelectionComponent } from '../ui-components/section-bar-with-selection/section-bar-with-selection.component';
import { SelectionsListComponent } from '../ui-components/selections-list/selections-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    DataLoadingIndicatorComponent,
    ElementPreviewComponent,
    ElementsListComponent,
    NavigationBarStrechComponent,
    SectionBarWithSelectionComponent,
    SelectionsListComponent
  ],
  exports: [
    DataLoadingIndicatorComponent,
    ElementPreviewComponent,
    ElementsListComponent,
    NavigationBarStrechComponent,
    SectionBarWithSelectionComponent,
    SelectionsListComponent
  ]
})
export class SharedModule { }
