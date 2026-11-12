import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';

import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { ConfirmationService, MessageService } from 'primeng/api';

import { routes } from './app.routes';
import { LibControlHttpInterceptor } from './security/LibControl-http-interceptor';

export function tokenGetter(): any {
  return localStorage.getItem('token');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    MessageService,
    ConfirmationService,
    provideHttpClient(
      withInterceptorsFromDi() // Importante para que os interceptores do JwtModule funcionem
    ),
    provideRouter(routes),
    importProvidersFrom(
      JwtModule.forRoot({
        config: {
          tokenGetter: tokenGetter,
          allowedDomains: ['localhost:8080'],
          disallowedRoutes: [
            'http://localhost:8080/auth/login', 
            'http://localhost:8080/auth/refresh', 
            'http://localhost:8080/user'
          ]
        }
      })
    ),
    JwtHelperService,
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    }),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LibControlHttpInterceptor,
      multi: true
    }
  ]
};