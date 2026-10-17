import { Routes } from '@angular/router';
import { BooksListComponent } from './books/books-list/books-list.component';
import { LoginFormComponent } from './security/login-form/login-form.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'books', component: BooksListComponent },
    { path: 'login', component: LoginFormComponent }
];
