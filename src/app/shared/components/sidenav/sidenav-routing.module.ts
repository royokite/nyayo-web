import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { CollectionsComponent } from 'src/app/pages/collections/collections.component';
import { PaymentsComponent } from 'src/app/pages/payments/payments.component';
import { ReportsComponent } from 'src/app/pages/reports/reports.component';
import { UsersComponent } from 'src/app/pages/users/users.component';
import { SettingsComponent } from 'src/app/pages/settings/settings.component';
import { NotfoundComponent } from 'src/app/pages/notfound/notfound.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'collections', component: CollectionsComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SidenavRoutingModule { }
