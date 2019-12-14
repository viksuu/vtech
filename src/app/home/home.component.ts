import { Component, OnInit, Input } from "@angular/core";
import { User } from "../index/user";
import { ActivatedRoute, Router } from "@angular/router";
import { HomeServicesService } from "./home-services/home-services.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  id: number;
  private sub: any;

  constructor(
    private route: Router,
    private homeServices: HomeServicesService
  ) {}

  ngOnInit() {}

  goToDashboard() {
    this.homeServices.getLoggedinUserId().subscribe(res => {
      console.log(res);
      this.id = res;
      this.route.navigate(["home/dashboard/", this.id]);
    });
  }
}
