import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

}


window.onresize = window.onload = () => {
  let logo = document.getElementById('imgNavb');
    if (window.innerWidth < 640) {
      logo.setAttribute('src', '../../../../assets/img/icono_granada.png');
      logo.style.width = '30px';
    }else{
      logo.setAttribute('src', '../../../../assets/img/logo_granada.png');
      logo.style.width = '120px';
    }
};

