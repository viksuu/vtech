import { Component, OnInit, Output, Input } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "today-staus",
  templateUrl: "./staus.component.html",
  styleUrls: ["./staus.component.css"]
})
export class StausComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input("childData") childData;

  //A step 1
  inMind: string;
  //A step 2
  @Output() shareEvent = new EventEmitter();

  //A step 3
  share() {
    console.log(this.inMind);
    if (this.inMind) {
      this.shareEvent.emit(this.inMind);
    }
    this.inMind = "";
  }




}
