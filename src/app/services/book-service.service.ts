import { Injectable } from '@angular/core';
import { Http,Headers } from "@angular/http";
import { Book } from '../class/books.class';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(public http: Http) { 
    console.log('service listo');
    
  }

  private books: any[] = []
  private urlBooks:string = 'https://fakerestapi.azurewebsites.net/api/books'

  getBook(id: string){
    let url = `${this.urlBooks}/${id}`
    console.log(url)
    return this.http.get(url).pipe(map(data => data.json()));                    
  }

  getBooks(){
    let url = this.urlBooks

    return this.http.get(url).pipe(map(data => data.json()));

  }

  deleteBook(id){
    let url = `${this.urlBooks}/${id}`
    
    console.log(url)
    return this.http.delete(url)
  }

  updateBook(id, book:Book){
    let body = JSON.stringify( book )
    let headers = new Headers({
      'Content-Type':'application/json'
    })
    let url = `${this.urlBooks}/${id}`
    console.log(body)
    return this.http.put(url,body,{ headers }).pipe(map(data => data.json()));

  }

}
