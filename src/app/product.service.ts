import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient) { }
  Select()
  {
    return this.http.get("http://192.168.0.104:9898/categories")
  }
}
