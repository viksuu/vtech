import { Directive, HostListener, ElementRef, Input } from "@angular/core";

@Directive({
  selector: "[zoom]"
})
export class ZoomDirective {
  @Input("item") something: string;
  constructor(private eleRef: ElementRef) {}

  @HostListener("mouseenter")
  showEleRef() {
    console.log("directive");
    
    console.log(this.eleRef);
    this.eleRef.nativeElement.style.backgroundColor = this.something;
    console.log(this.eleRef.nativeElement.style.backgroundColor);
  }
}
