import { Routes } from '@angular/router';

import { BooksListComponent } from './books/books-list/books-list.component';
import { BookRegisterComponent } from './books/book-register/book-register.component';

import { LoginFormComponent } from './security/login-form/login-form.component';

import { ReviewListComponent } from './review/review-list/review-list.component';
import { ReviewRegisterComponent } from './review/review-register/review-register.component'
import { UserRegisterComponent } from './users/user-register/user-register.component';
import { PageNotFoundComponent } from './core/page-not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: '/books', pathMatch: 'full' },
    { path: 'books', component: BooksListComponent },
    { path: 'users/new', component: UserRegisterComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'reviews', component: ReviewListComponent},
    { path: 'reviews/new', component: ReviewRegisterComponent},
    { path: 'reviews/:id', component: ReviewRegisterComponent},
    { path: 'books/new', component: BookRegisterComponent},
    { path: 'page-not-found', component: PageNotFoundComponent },
    { path: '**', redirectTo: 'page-not-found'} // importante que seja a última rota
];
