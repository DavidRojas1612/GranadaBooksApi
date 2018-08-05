import { Component } from '@angular/core';
import { BookServiceService } from './services/book-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  books:any[] =[]
  constructor(private serviceBook: BookServiceService){
    
    this.serviceBook.getBooks().subscribe(resp=>{
      this.books = resp;
      console.log(this.books)
      window.localStorage.setItem('data', JSON.stringify(this.books))
    })
    
  }
}
