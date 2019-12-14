import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[onlyNumbers]'
})
export class OnlyNumbersDirective {

  constructor(private eleRef: ElementRef) {}


 
  
  @HostListener("mouseenter")
  showEleRef() {
    console.log("directive");
    
    console.log(this.eleRef);
    // this.eleRef.nativeElement.style.backgroundColor = this.something;
    console.log(this.eleRef.nativeElement.style.backgroundColor);
  }
}


