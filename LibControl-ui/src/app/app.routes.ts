import { Routes } from '@angular/router';
import { BooksListComponent } from './books/books-list/books-list.component';
import { BookRegisterComponent } from './books/book-register/book-register.component';
import { LoginFormComponent } from './security/login-form/login-form.component';
import { ReviewListComponent } from './review/review-list/review-list.component';
import { ReviewRegisterComponent } from './review/review-register/review-register.component'

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'books', component: BooksListComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'reviews', component: ReviewListComponent},
    { path: 'reviews/new', component: ReviewRegisterComponent},
    { path: 'books/new', component: BookRegisterComponent}
];
