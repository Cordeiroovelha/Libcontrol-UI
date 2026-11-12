import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmationService, MessageService } from 'primeng/api';

import { ErrorHandlerService } from '../../core/error-handler.service';
import { ReviewService } from '../review.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-review-list',
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    RouterLink
  ],
  providers:[
    Title
  ],
  templateUrl: './review-list.component.html',
  styleUrl: './review-list.component.css'
})
export class ReviewListComponent {
  Reviews = [];

  constructor(
    private reviewService: ReviewService,
    private confirmation: ConfirmationService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private title: Title,
    private router: Router
    ){  }

  ngOnInit(): void {
    this.title.setTitle('Suas Reviews');
    this.list();
  }

  list(): void{
    this.reviewService.listByUser()
      .then(result => {
        this.Reviews = result;
      })
      .catch(error => {
        if (error.status === 401 || error.status === 403) {
            this.router.navigate(['/login']);
        }
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
      })
      .catch(error => this.errorHandler.handle(error));
  }

}
