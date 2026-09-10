import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AuthService } from '../auth.service';

import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule
  ],
  providers: [
    JwtHelperService
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  msg: any;

  constructor(private auth: AuthService) {
  }

  login(user: string, password: string) {
    this.auth.login(user, password)
    .then(() => {
      this.msg = 'redirecionar para /activities';
    })
    .catch(() => {
      this.msg = 'Usuário e/ou senha inválida!';
    });
  }

}