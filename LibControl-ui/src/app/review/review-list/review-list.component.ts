import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { ReviewService } from '../review.service';
import { RouterLink } from '@angular/router';

import { BooksService } from '../../books/books.service';

@Component({
  selector: 'app-review-list',
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    RouterLink
  ],
  templateUrl: './review-list.component.html',
  styleUrl: './review-list.component.css'
})
export class ReviewListComponent {
  Reviews = [];

  constructor(
    private reviewService: ReviewService,
    private booksService: BooksService
    ){  }

  ngOnInit(): void {
    this.list();
  }

  list(): void{
    this.reviewService.listByUser()
      .then(result => {
        this.Reviews = result;
      });
    
    // this.booksService.list()
    //   .then(result => {
    //     this.Reviews = result;
    //   });
  }

}
