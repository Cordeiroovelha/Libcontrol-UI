import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    TooltipModule
  ],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css'
})
export class BooksListComponent {
  Livros = [];

  constructor(private booksService: BooksService){ }

  ngOnInit(): void {
    this.list();
  }

  list(): void {
    this.booksService.list()
      .then(result => {
        this.Livros = result;
      });
  }
}
