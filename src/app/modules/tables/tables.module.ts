import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableTotalComponent } from './components/table-total/table-total.component';
import { TableTeamComponent } from './components/table-team/table-team.component';
import { TableBarComponent } from './components/table-bar/table-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    TableTotalComponent,
    TableTeamComponent,
    TableBarComponent
  ],
  exports: [
    TableTotalComponent
  ]
})
export class TablesModule { }
