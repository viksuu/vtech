import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "./index.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from './signup/signup.component';

const IndexRoutes: Routes = [
  {
    path: "",
    component: IndexComponent,

    children: [
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "signup",
        component: SignupComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(IndexRoutes)],
  exports: [RouterModule]
})
export class IndexRoutingModule {}
