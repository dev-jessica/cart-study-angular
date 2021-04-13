import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl="https://api.jsonbin.io/b/60709289181177735ef52f1d"

  constructor(private http: HttpClient) { }

  showOnConsole(msg:string): void{
  console.log(msg)
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
  }
}
