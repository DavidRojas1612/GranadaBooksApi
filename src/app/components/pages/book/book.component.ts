import { Component, OnInit } from '@angular/core';

import { BookServiceService } from 'src/app/services/book-service.service';
import { Book } from '../../../class/books.class';


import { ActivatedRoute, Router } from '@angular/router';
import { ImgService } from 'src/app/services/img.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  book = {};
  edit:boolean = false;
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private imgService: ImgService,
              private bookService: BookServiceService) {
    
   }
  

  ngOnInit() {
    
    this.activatedRoute.params
    .subscribe(activeR =>{
      console.log(activeR.id);
      this.bookService.getBook(activeR.id).subscribe(result =>{
        this.book = result;
        console.log(this.book)
      })
    });
  }


  deleteBook(id){
    this.bookService.deleteBook(id).subscribe(res =>{
      console.log(res)
      console.log("borrado")
      this.router.navigate(["/"]);
    })

  }

}
