import { Component, OnInit } from "@angular/core";
import { RegionService } from "src/app/shared-module/services/region.service";

@Component({
  selector: "app-async",
  templateUrl: "./async.component.html",
  styleUrls: ["./async.component.css"]
})
export class AsyncComponent implements OnInit {
  subscribedvalues: any = [];
  asyncObsValue: any = [];

  asyncValue: Object = {
    name: "",
    id: 0
  };
  constructor(private regionService: RegionService) {}

  ngOnInit() {
    this.getThroughSubscription();
    this.getThroughAsyncPipe();
  }

  getThroughSubscription() {
    this.regionService
      .getAsync()
      .subscribe(res => (this.subscribedvalues = res));
  }

  getThroughAsyncPipe() {
    this.asyncObsValue = this.regionService.getAsync();
  }
  addAsync() {
    debugger;
    this.regionService
      .addAsync(this.asyncValue)
      .subscribe(res => {console.log(res)
      this.getThroughAsyncPipe();
      this.getThroughSubscription();
      });
  }

  trackBy(index:number,asyncValue:any){
    return asyncValue['id'];
  }
}
