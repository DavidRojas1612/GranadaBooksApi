import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/class/books.class';
import { ImgService } from 'src/app/services/img.service';
import { ActivatedRoute } from '@angular/router';
import { BookServiceService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-newbook',
  templateUrl: './newbook.component.html',
  styleUrls: ['./newbook.component.scss']
})
export class NewbookComponent implements OnInit {

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
    ){ }

  ngOnInit() {
    this.book.ID = Math.round((Math.random()*(300-200)+200));
  }

  crear(){
    this.bookService.createBook(this.book).subscribe(data => console.log(data));
  }


}
