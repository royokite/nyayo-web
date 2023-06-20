import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SidenavRoutingModule } from './components/sidenav/sidenav-routing.module';


@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SidenavRoutingModule
  ],
  exports: [SidenavComponent]
})
export class SharedModule { }
