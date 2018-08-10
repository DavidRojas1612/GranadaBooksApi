import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _router:Router,
              private renderer:Renderer2) { }

  ngOnInit() {
    
    
  }

  searchBook( termino:string ){
    console.log(termino)
    this._router.navigate( ['/book/search',termino])
  }


  @ViewChild('searchIcon') icon: ElementRef;
  @ViewChild('searchText') input: ElementRef;
  @ViewChild('search') searchContent: ElementRef;
  @ViewChild('icons') icons: ElementRef;
  @ViewChild('desk') desk: ElementRef;
  
  ngAfterContentInit() {
    let active = false;

    this.renderer.listen(this.icon.nativeElement,'click', ()=>{
      if(active == false){
        this.renderer.addClass(this.searchContent.nativeElement,'mostrar')
        active = true;
        console.log('agregé')
      }else {
        this.renderer.removeClass(this.searchContent.nativeElement,'mostrar')
        active = false;
        console.log('quité')
      }
    })

    this.renderer.listen(this.input.nativeElement, 'keyup', (e)=>{
      if (e.key === 'Enter'){
        this.renderer.removeClass(this.searchContent.nativeElement, 'mostrar')
      }
    })


    window.onresize = window.onload = () => {
        if (window.innerWidth < 640) {
          this.renderer.setAttribute(this.icons.nativeElement,'style','display: block')
          this.renderer.setAttribute(this.desk.nativeElement,'style','display: none')
        }else{
          this.renderer.setAttribute(this.icons.nativeElement,'style','display: none')
          this.renderer.setAttribute(this.desk.nativeElement,'style','display: block')
        }
    };
  
  }

  

}



//metodo para hacer el navbar responsivo con las imagenes.


