import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
    
  }

  searchBook( termino:string ){
    console.log(termino)
    this._router.navigate( ['/book/search',termino])
  }


  @ViewChild('searchIcon') icon: ElementRef;
  @ViewChild('searchText') input: ElementRef;
  
  ngAfterContentInit() {
    let active = false;
    this.icon.nativeElement.addEventListener('click', (e:any) =>{
      
      if (active === false){
        document.getElementById('search').classList.add("mostrar");
        active = true;
        }else {
        document.getElementById('search').classList.remove("mostrar");   
        active = false;
      }
    })

    this.input.nativeElement.addEventListener('keyup', (e)=>{
      if (e.key === 'Enter'){
        this.input.nativeElement.setAttribute('value', 'mundo')
        document.getElementById('search').classList.remove("mostrar");
      }
    });
    
  
  }


}



//metodo para hacer el navbar responsivo con las imagenes.
window.onresize = window.onload = () => {
  let logo = document.getElementById('imgNavb');
  let icons = document.getElementById('icons');
  let desk = document.getElementById('desk');
    if (window.innerWidth < 640) {
      logo.setAttribute('src', 'assets/img/icono_granada.png');
      logo.style.width = '30px';
      icons.style.display='block';
      desk.style.display='none';
    }else{
      logo.setAttribute('src', 'assets/img/logo_granada.png');
      logo.style.width = '120px';
      icons.style.display='none';
      desk.style.display='block';
    }
};

