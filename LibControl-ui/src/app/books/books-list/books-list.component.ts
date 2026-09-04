import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

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
  Livros = [
    {id: 1, name: 'Capitão de areia', release_date: '1993-10-5', category: 'NACIONAL', booked: 0},
    {id: 2, name: 'Hamlet', release_date: '1964-11-8', category: 'INTERNACIONAL', booked: 1}
  ];
}
