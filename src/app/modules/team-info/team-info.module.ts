import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamInfoComponent } from './team-info.component';
import { RouterModule } from '@angular/router';
import { HierarchyBarComponent } from './components/hierarchy-bar/hierarchy-bar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [TeamInfoComponent, HierarchyBarComponent]
})
export class TeamInfoModule { }
