import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { ReviewService } from '../review.service';
import { RouterLink } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';


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
    private confirmation: ConfirmationService,
    private messageService: MessageService
    ){  }

  ngOnInit(): void {
    this.list();
  }

  list(): void{
    this.reviewService.listByUser()
      .then(result => {
        this.Reviews = result;
      });
  }

  confirmRemoval(review: any): void {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.delete(review);
      }
    });
  }

    delete(review: any): void {
    this.reviewService.delete(review.id)
      .then(() => {
        this.list();
        this.messageService.add({ severity: 'success', detail: 'Review excluída com sucesso!' });
      });
  }

}
