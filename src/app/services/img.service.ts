import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImgService {

  constructor() { }
  private url = "http://picsum.photos/200/300/?image"

  getImg(id){
    return `${this.url}=${id}`
  }
}
