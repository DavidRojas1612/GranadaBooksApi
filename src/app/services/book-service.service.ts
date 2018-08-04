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
  
  private urlBooks:string = 'https://fakerestapi.azurewebsites.net/api/books'

  //método para obtener info de un solo libro
  getBook(id:number){
    let url = `${this.urlBooks}/${id}`
    console.log(url)
    return this.http.get(url).pipe(map(data => data.json()));                    
  }

  //método para obtener listado de los libros
  getBooks(){
    let url = this.urlBooks

    return this.http.get(url).pipe(map(data => data.json()));

  }

  //método para borrar un  libro
  deleteBook(id:number){
    let url = `${this.urlBooks}/${id}`
    
    console.log(url)
    return this.http.delete(url)
  }

  //método para actualizar un  libro
  updateBook(id, book:Book){
    let body = JSON.stringify( book )
    let headers = new Headers({
      'Content-Type':'application/json'
    })
    let url = `${this.urlBooks}/${id}`
    return this.http.put(url,body,{ headers })

  }

  //método para crear un  libro
  createBook( book:Book ){
    let body = JSON.stringify( book )
    let headers = new Headers({
      'Content-Type':'application/json'
    })
    let url = `${this.urlBooks}`
    return this.http.post(url,body,{ headers }).pipe(map(data => data.json()));
  }
}
