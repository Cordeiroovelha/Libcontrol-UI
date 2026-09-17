import { Routes } from '@angular/router';
import { BooksListComponent } from './books/books-list/books-list.component';

export const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'books', component: BooksListComponent}
];
