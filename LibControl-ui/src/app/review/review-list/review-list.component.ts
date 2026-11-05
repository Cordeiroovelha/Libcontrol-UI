import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { ReviewService } from '../review.service';
import { RouterLink } from '@angular/router';

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

  constructor(private reviewService: ReviewService){ }

  ngOnInit(): void {
    this.list();
  }

  list(): void{
    this.reviewService.listByUser()
      .then(result => {
        this.Reviews = result;
      });
    
    this.reviewService.listByBook()
      .then(result => {
        this.Reviews = result;
      });
  }

}
