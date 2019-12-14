import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { ProfileComponent } from "./profile/profile.component";
import { SettingsComponent } from "./settings/settings.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AsyncComponent } from './async/async.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,

    children: [
      { path: "dashboard/:id", component: DashboardComponent },
      { path: "profile", component: ProfileComponent },
      { path: "async", component: AsyncComponent },
      { path: "setting", component: SettingsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
