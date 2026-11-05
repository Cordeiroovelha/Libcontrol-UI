import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { DatePickerModule } from 'primeng/datepicker';

import { BooksService, type BookOption } from '../../books/books.service';
import { AuthService } from '../../security/auth.service';
import { Review } from '../../core/model';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-review-register',
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    DatePickerModule,
  ],
  templateUrl: './review-register.component.html',
  styleUrl: './review-register.component.css'
})

export class ReviewRegisterComponent {
  review: Review;

  books: BookOption[] = [];
  selectedBook: BookOption | null = null;
  loadingBooks = false;
  booksError = '';

  constructor(
    private booksService: BooksService,
    private reviewService: ReviewService,
    private auth: AuthService
  ) { 
    this.review = new Review(this.auth.jwtPayload?.user_id, this.selectedBook?.id);
  }

  ngOnInit(): void {
    this.loadBooks();
  }

  async loadBooks(): Promise<void> {
    this.loadingBooks = true;
    this.booksError = '';

    try {
      this.books = await this.booksService.list();
    } catch (error) {
      console.error('Não foi possível carregar os livros para a review.', error);
      this.booksError = 'Não foi possível carregar os livros. Tente novamente.';
    } finally {
      this.loadingBooks = false;
    }
  }

  save(reviewForm: NgForm){
    this.reviewService.add(this.review)
     .then(() => {
        console.log('Review Feita com Sucesso!');
        reviewForm.reset();
        this.review = new Review(this.auth.jwtPayload?.user_id, this.selectedBook?.id);
     })
     .catch(error => console.log(error));
  }
}
