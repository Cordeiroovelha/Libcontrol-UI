import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

import { TooltipModule } from 'primeng/tooltip';
import { BooksListComponent } from './books/books-list/books-list.component';
import { LoginFormComponent } from './security/login-form/login-form.component';
import { AuthService } from './security/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BooksListComponent,
    LoginFormComponent,
    ButtonModule,
    TableModule,
    TooltipModule
  ],
  providers: [
    AuthService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'LibControl-ui';

  Livros = [
    {id: 1, name: 'Capitão de areia', release_date: '1993-10-5', category: 'NACIONAL', booked: 0},
    {id: 2, name: 'Hamlet', release_date: '1964-11-8', category: 'INTERNACIONAL', booked: 1}
  ];

}


