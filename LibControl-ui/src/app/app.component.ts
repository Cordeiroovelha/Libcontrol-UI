import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule} from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog'

import { AuthService } from './security/auth.service';
import { NavbarComponent } from './core/navbar/navbar.component';

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
    MessageService,
    ConfirmationService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'LibControl-ui';
}


