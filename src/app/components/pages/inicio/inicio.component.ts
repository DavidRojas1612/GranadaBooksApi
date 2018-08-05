import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../../../services/book-service.service';
import { Book } from '../../../class/books.class';
import { Router } from "@angular/router";
import { ImgService } from '../../../services/img.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {


  private books:any[] = [];

  constructor(public bookService: BookServiceService,
              public imgService: ImgService,
              private router: Router) 
  {
    
    this.books = JSON.parse(window.localStorage.getItem('data'))
   }

  ngOnInit() {
  }



  goto(idx){
    this.router.navigate(["/book",idx]);
  }
}
