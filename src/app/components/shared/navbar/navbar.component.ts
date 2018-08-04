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
  let icons = document.getElementById('icons');
  let desk = document.getElementById('desk');
    if (window.innerWidth < 640) {
      logo.setAttribute('src', '../../../../assets/img/icono_granada.png');
      logo.style.width = '30px';
      icons.style.display='block';
      desk.style.display='none';
    }else{
      logo.setAttribute('src', '../../../../assets/img/logo_granada.png');
      logo.style.width = '120px';
      icons.style.display='none';
      desk.style.display='block';
    }
};

