import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HomeServicesService } from "../home-services/home-services.service";
import { User } from "src/app/index/user";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  id: number;
  private sub: any;

  private user: User;

  childData;

  //A step 5
  inMind;
  
  constructor(
    private route: ActivatedRoute,
    private homeServices: HomeServicesService
  ) {}
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params["id"]; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.

      this.homeServices.setLoggedinUserId(this.id);
    });

    console.log(this.id);
    this.getUserById();
  }

  getUserById() {
    this.homeServices.getUserById(this.id).subscribe((res: User) => {
      console.log(res);
      this.user = res;
    });
  }
}
