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
  
  }


}



//metodo para hacer el navbar responsivo con las imagenes.
window.onresize = window.onload = () => {
  let logo = document.getElementById('imgNavb');
  let icons = document.getElementById('icons');
  let desk = document.getElementById('desk');
    if (window.innerWidth < 640) {
    //  logo.setAttribute('src', 'assets/img/icono_granada.png');
    //  logo.style.width = '30px';
      icons.style.display='block';
      desk.style.display='none';
    }else{
    //  logo.setAttribute('src', 'assets/img/logo_granada.png');
    //  logo.style.width = '120px';
      icons.style.display='none';
      desk.style.display='block';
    }
};

