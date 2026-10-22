import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../security/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  reviewUrl = 'http://localhost:8080/reviews';

  email: any;

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  async listByUser(): Promise<any> {
    this.email = this.auth.jwtPayload?.sub;
    return await firstValueFrom(this.http.get(`${this.reviewUrl}/user/${this.email}`));
  }
}
