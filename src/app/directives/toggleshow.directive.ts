import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[Toggleshow]'
})
export class ToggleshowDirective {
  
  constructor(private renderer:Renderer2,
    private element:ElementRef) { }
    
    active = false;
    @HostListener('click')
    onclick(){
     let el = this.renderer.selectRootElement('.search'); 
      if(this.active == false){
      this.renderer.addClass(el,'mostrar');
      this.active = true;
      console.log('agregé')
    }else {
      this.renderer.removeClass(el,'mostrar');
      this.active = false;
      console.log('quité')
    }
  }

}
