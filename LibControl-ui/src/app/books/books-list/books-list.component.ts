import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { BooksService, type BookOption } from '../books.service';


@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    TooltipModule
  ],
  providers:[
    Title
  ],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css'
})
export class BooksListComponent {
  Livros: BookOption[] = [];

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
}
