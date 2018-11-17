import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataLoadingIndicatorComponent } from '../ui-components/data-loading-indicator/data-loading-indicator.component';
import { ElementPreviewComponent } from '../ui-components/element-preview/element-preview.component';
import { ElementsListComponent } from '../ui-components/elements-list/elements-list.component';
import { MatchesModule } from '../matches/matches.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    DataLoadingIndicatorComponent,
    ElementPreviewComponent,
    ElementsListComponent
  ],
  exports: [
    DataLoadingIndicatorComponent,
    ElementPreviewComponent,
    ElementsListComponent
  ]
})
export class SharedModule { }
