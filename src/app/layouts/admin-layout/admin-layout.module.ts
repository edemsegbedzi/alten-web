import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import {NgxGraphModule} from '@swimlane/ngx-graph';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {GraphComponent} from '../../dashboard/graph/graph.component';
import {TimeAgoPipe} from 'time-ago-pipe';
import {SearchPipe} from '../../table-list/search.pipe';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    NgxGraphModule,
    NgxChartsModule,

  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    GraphComponent,
    TimeAgoPipe,
    SearchPipe,

  ]
})

export class AdminLayoutModule {}
