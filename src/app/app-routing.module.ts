import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IndexModule } from "./index/index.module";
import { AppComponent } from "./app.component";

const routes: Routes = [
  { path: "", redirectTo:"/index" , pathMatch:'full'},
  {
    path: "index",
    loadChildren: () => import("./index/index.module").then(m => m.IndexModule)
  },
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
