import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { NgxChartsModule } from '@swimlane/ngx-charts';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    DashboardComponent,
    NgxChartsModule
  ]
})
export class DashboardModule { }
