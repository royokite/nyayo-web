import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SidenavRoutingModule } from './components/sidenav/sidenav-routing.module';
import { DataCardComponent } from './components/data-card/data-card.component';

@NgModule({
  declarations: [
    SidenavComponent,
    DataCardComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SidenavRoutingModule
  ],
  exports: [SidenavComponent, DataCardComponent]
})
export class SharedModule { }
