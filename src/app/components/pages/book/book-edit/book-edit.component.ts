import { FormGroup,FormControl, Validators,FormBuilder, FormArray } from '@angular/forms';
import { BookServiceService } from '../../../../services/book-service.service';

import { Component, OnInit } from '@angular/core';
import { ImgService } from 'src/app/services/img.service';
import { Book } from '../../../../class/books.class';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {

 id:number;

 book:Book = {
    ID: 0,
    Title: "",
    Description: "",
    PageCount: 0,
    Excerpt: "",
    PublishDate: null
  };

  constructor(public imgService: ImgService,
              private activatedRoute: ActivatedRoute,
              private bookService: BookServiceService,
              private router: Router,
              ) {

                this.activatedRoute.params.subscribe( para =>{
                  this.id = para.id;
                  this.book.ID = this.id

                  this.bookService.getBook(this.id).subscribe(resp=>{
                    this.book= resp;
                  })
                })

                
               }

  ngOnInit() {

  }


  guardar(){
    this.bookService.updateBook(this.id,this.book).subscribe(resp =>{
      if(resp.status === 200){
        alert(`se ha guardado correctamente!, status: ${resp.status}`)
        this.router.navigate(["/"]);
      }
    })
    
  }

}
