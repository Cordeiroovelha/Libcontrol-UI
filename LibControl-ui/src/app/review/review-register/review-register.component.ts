import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Component} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { DatePickerModule } from 'primeng/datepicker';
import { MessageService } from 'primeng/api';

import { BooksService, type BookOption } from '../../books/books.service';
import { AuthService } from '../../security/auth.service';
import { Review } from '../../core/model';
import { ReviewService } from '../review.service';
import { MessageComponent } from '../../shared/message/message.component';
import { ErrorHandlerService } from '../../core/error-handler.service';

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
    MessageComponent,
    RouterModule
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
    private auth: AuthService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.review = new Review(this.auth.jwtPayload?.user_id, this.selectedBook?.id);
  }

  ngOnInit(): void {
    this.loadBooks();

    const id = this.route.snapshot.paramMap.get('id');
    if (id && id !== 'new') {
      this.loadReview(Number(id));
    }
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

  get editing(): boolean {
    return Boolean(this.review.id);
  }

  loadReview(id: number){
    this.reviewService.findById(id)
    .then(review => {
      if(review){
        this.review = review;
      }
    })
    .catch(error => this.errorHandler.handle(error));
  }

  save(){
    if(this.editing){
      this.updateReview();
    }else{
      this.addReview();
    }
  }

  updateReview(){
    this.reviewService.update(this.review)
      .then(review => {
        this.messageService.add({ severity: 'success', detail: 'Review editada com sucesso!' });
        if (review) {
          this.review = review;
        } else {
          this.errorHandler.handle(new Error('Atividade não encontrada.'));
          this.review = new Review(this.auth.jwtPayload?.user_id, this.selectedBook?.id);
        }
      })
      .catch(error => this.errorHandler.handle(error));
  }

  addReview(){
    this.reviewService.add(this.review)
      .then(addedReview => {
        this.messageService.add({ severity: 'success', detail: 'Review Feita com Sucesso!' });
        this.loadReview(addedReview.id);
        this.router.navigate(['/reviews', addedReview.id])
      })
      .catch(error => this.errorHandler.handle(error));
  }

  new(reviewForm: NgForm){
    this.review = new Review(this.auth.jwtPayload?.user_id, this.selectedBook?.id);
    reviewForm.reset();
    this.router.navigate(['/reviews/new']);
  }
}
