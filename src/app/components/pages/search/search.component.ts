import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../../class/books.class';
import { BookServiceService } from '../../../services/book-service.service';
import { ImgService } from 'src/app/services/img.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  bus: any;
  private books:Book[]=[]
  constructor(private activatedRoute:ActivatedRoute,
              private _router:Router,   
              public imgService: ImgService,
              private bookservice: BookServiceService) 
    {

    }


  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.books = this.bookservice.searchBook( params['title']);  
      console.log(this.books);
      this.bus = params['nombre'];     
     });
    

  }

}
