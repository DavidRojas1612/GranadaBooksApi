import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Book } from 'src/app/class/books.class';
import { ImgService } from 'src/app/services/img.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BookServiceService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-newbook',
  templateUrl: './newbook.component.html',
  styleUrls: ['./newbook.component.scss']
})
export class NewbookComponent implements OnInit {

  book:Book = {
    ID: 0,
    Title: "",
    Description: "",
    PageCount: 0,
    Excerpt: "",
    PublishDate: null
  };

  constructor(private imgService: ImgService,
    private activatedRoute: ActivatedRoute,
    private bookService: BookServiceService,
    private router:Router
    ){

     }
     

  //obtener elementos del dom con angular, example: escuchar evento del input file y modificar la imagen   
  @ViewChild('Imagen') input: ElementRef;

  ngAfterContentInit() {
    this.input.nativeElement.addEventListener('change', (e:any) =>{
      const fileImg = e.target.files
      Array.from(fileImg).forEach(file=>{
        let prevs = document.querySelector('.bookNew__img')
        let url = window.URL.createObjectURL(file)
        prevs.setAttribute('src', `${url}`)

        // se que esto se considera mala practica, pero no me dejaba buildear
        prevs.setAttribute('style', 'width: 200px;')
        
        //de esta manera = {
          // prevs.style.width = '200px';
          //  }
      })
    })
  }
  
  ngOnInit() {
    this.book.ID = Math.round((Math.random()*(300-200)+200));

  }

  crear(){
    this.bookService.createBook(this.book).subscribe(resp =>{
      if(resp.status === 200){
        let books =  JSON.parse(window.localStorage.getItem('data'))
        books.push(this.book);
        window.localStorage.setItem('data', JSON.stringify(books))
        alert(`se ha guardado correctamente!, status: ${resp.status}`)
        this.router.navigate(["/"]);
      }
    })
  }


}
