import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SidenavRoutingModule } from './components/sidenav/sidenav-routing.module';
import { DataCardComponent } from './components/data-card/data-card.component';
import { UserCardComponent } from './components/user-card/user-card.component';

@NgModule({
  declarations: [
    SidenavComponent,
    DataCardComponent,
    UserCardComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SidenavRoutingModule
  ],
  exports: [SidenavComponent, DataCardComponent, UserCardComponent]
})
export class SharedModule { }
