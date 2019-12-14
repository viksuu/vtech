import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { RegionService } from "src/app/shared-module/services/region.service";
import { Observable, Subscription } from "rxjs";
import { switchMap, debounceTime, distinctUntilChanged } from "rxjs/operators";

import { fromEvent } from "rxjs";
import { map } from "rxjs/operators";
@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.css"]
})
export class SettingsComponent implements OnInit {
  source$: Observable<any>;
  constructor(private regionService: RegionService) {}
  // searchText: String = "";
  regions: any[] = [];
  @ViewChild("search", { static: true }) searchText: ElementRef;

  private ob1: Subscription;

  ngOnInit() {
    // this.searchText.nativeElement.fromEvent('event')
    this.search();
  }

  search() {
    fromEvent(this.searchText.nativeElement, "keyup")
      .pipe(
        map((evt: any) => evt.target.value),
        debounceTime(1000),
        distinctUntilChanged()
      )
      .pipe(switchMap(search => this.regionService.searchRegion(search)))
      .subscribe(res => (this.regions = res));
  }

  print()
  {
    console.log("helo");
    
  }
}
