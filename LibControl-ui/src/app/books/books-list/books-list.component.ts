import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ButtonModule } from 'primeng/button';

import { BooksService, type BookList } from '../books.service';


@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    RouterLink
  ],
  providers:[
    Title
  ],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css'
})
export class BooksListComponent {
  Livros: BookList[] = [];

  constructor(
    private booksService: BooksService,
    private title: Title
  ){ }

  ngOnInit(): void {
    this.title.setTitle('Livros disponiveis');
    this.list();
  }

  list(): void {
    this.booksService.list()
      .then(result => {
        this.Livros = result;
      });
  }

  coverUrl(cover: string): string {
    return `/CapasLibControl/${encodeURIComponent(cover)}`;
  }
}
