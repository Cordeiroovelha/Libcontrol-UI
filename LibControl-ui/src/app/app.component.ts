import { Component, LOCALE_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ToastModule} from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog'

import { AuthService } from './security/auth.service';
import { NavbarComponent } from './core/navbar/navbar.component';
import { ErrorHandler } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    ToastModule,
    ConfirmDialogModule
  ],
  providers: [
    AuthService,
    ErrorHandler,
    { provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'LibControl-ui';
}

