import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-review-list',
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    TooltipModule
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
    this.reviewService.list()
      .then(result => {
        this.Reviews = result;
      });
  }

}
