import { Component, OnInit, OnChanges } from '@angular/core';

import { BookServiceService } from 'src/app/services/book-service.service';
import { Book } from '../../../class/books.class';


import { ActivatedRoute, Router } from '@angular/router';
import { ImgService } from 'src/app/services/img.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit{

  book:any = {};
  edit:boolean = false;
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              public imgService: ImgService,
              private bookService: BookServiceService,
              ) {

    
   }
  

  ngOnInit() {
    this.activatedRoute.params
    .subscribe(activeR =>{
      this.bookService.getBook(activeR.id).subscribe(result =>{
        this.book = result;
      })
    });
  }

  deleteBook(id){
    let safe = confirm('está seguro que desea borrar ?')

    if(safe){

      this.bookService.deleteBook(id).subscribe(resp =>{
        if(resp.status === 200){
          alert(`se ha borrado correctamente!, status: ${resp.status}`)
          this.router.navigate(["/"]);
        }
      })

    }  

  }
 
}
