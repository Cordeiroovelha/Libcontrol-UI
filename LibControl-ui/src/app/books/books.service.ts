import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export interface BookOption {
  id: number;
  name: string;
}

export interface BookList extends BookOption {
  author: string;
  release_date: number;
  category: string;
  rated: number;
  cover: string;
}

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  booksUrl = 'http://localhost:8080/books';

  constructor(private http: HttpClient) { }

  async list(): Promise<BookList[]> {
    return await firstValueFrom(this.http.get<BookList[]>(this.booksUrl));
  }
  
}