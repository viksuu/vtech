import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ZoomDirective } from "./shared/directives/zoom.directive";
import { SharedModule } from './shared-module/shared-module.module';

@NgModule({
  declarations: [AppComponent, ZoomDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ZoomDirective]
})
export class AppModule {}
