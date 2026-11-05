import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export interface BookOption {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  booksUrl = 'http://localhost:8080/books';

  constructor(private http: HttpClient) { }

  async list(): Promise<BookOption[]> {
    return await firstValueFrom(this.http.get<BookOption[]>(this.booksUrl));
  }
  
}