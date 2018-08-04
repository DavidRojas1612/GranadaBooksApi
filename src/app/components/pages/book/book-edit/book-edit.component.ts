import { Component, OnInit } from '@angular/core';
import { ImgService } from 'src/app/services/img.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup,FormControl, Validators,FormBuilder, FormArray } from '@angular/forms';
// import { Observable } from 'rxjs/Observable';
import { Book } from '../../../../class/books.class';
import { BookServiceService } from '../../../../services/book-service.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {

  private id:number;

  private book:Book = {
    ID: 0,
    Title: "",
    Description: "",
    PageCount: 0,
    Excerpt: "",
    PublishDate: null
  };

  constructor(private imgService: ImgService,
              private activatedRoute: ActivatedRoute,
              private bookService: BookServiceService
              ) {

                this.activatedRoute.parent.params.subscribe( para =>{
                  this.id = para.id;
                  this.book.ID = this.id
                  console.log(this.id)
                })

                
               }

  ngOnInit() {

  }

  guardar(){
    this.bookService.updateBook(this.id,this.book).subscribe(resp=>{
      console.log(resp);
    })
    
  }

}
