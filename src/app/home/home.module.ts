import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StausComponent } from './dashboard/staus/staus.component';
import { AppModule } from '../app.module';
import { SharedModule } from '../shared-module/shared-module.module';
import { AsyncComponent } from './async/async.component';


@NgModule({
  declarations: [HomeComponent, ProfileComponent, SettingsComponent, DashboardComponent, StausComponent, AsyncComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class HomeModule { }
