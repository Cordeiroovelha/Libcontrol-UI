import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

import { TooltipModule } from 'primeng/tooltip';
import { BooksListComponent } from './books/books-list/books-list.component';
import { LoginFormComponent } from './security/login-form/login-form.component';
import { AuthService } from './security/auth.service';
import { NavbarComponent } from './core/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
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
}


