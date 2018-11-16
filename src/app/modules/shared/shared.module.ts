import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataLoadingIndicatorComponent } from '../ui-components/data-loading-indicator/data-loading-indicator.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    DataLoadingIndicatorComponent
  ],
  exports: [
    DataLoadingIndicatorComponent
  ]
})
export class SharedModule { }
