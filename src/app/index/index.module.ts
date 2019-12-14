import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IndexRoutingModule } from "./index-routing.module";
import { IndexComponent } from "./index.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [IndexComponent, LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    IndexRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule
  ]
})
export class IndexModule {}
