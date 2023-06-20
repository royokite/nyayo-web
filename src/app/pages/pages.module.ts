import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { CollectionsComponent } from './collections/collections.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PaymentsComponent } from './payments/payments.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CollectionsComponent,
    PaymentsComponent,
    ReportsComponent,
    UsersComponent,
    SettingsComponent,
    NotfoundComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ],
  exports: [
    DashboardComponent,
    CollectionsComponent,
    PaymentsComponent,
    ReportsComponent,
    UsersComponent,
    SettingsComponent,
    NotfoundComponent
  ]
})
export class PagesModule { }

