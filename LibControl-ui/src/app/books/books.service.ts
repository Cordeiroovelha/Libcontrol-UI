import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  booksUrl = 'http://localhost:8080/books';

  constructor(private http: HttpClient) { }

  async list(): Promise<any> {
    return await firstValueFrom(this.http.get(this.booksUrl));
  }
  
}