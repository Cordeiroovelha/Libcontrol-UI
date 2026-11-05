import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../security/auth.service';
import { Review } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  reviewUrl = 'http://localhost:8080/reviews';

  email: any;
  idBook: any;

  constructor(
    private http: HttpClient,
    private auth: AuthService,
  ) { }

  async listByUser(): Promise<any> {
    this.email = this.auth.jwtPayload?.sub;
    return await firstValueFrom(this.http.get(`${this.reviewUrl}/user/${this.email}`));
  }

  async add(review: Review): Promise<any> {
    const headers = new HttpHeaders({ 'Content-type': 'application/json'});
    const body = Review.toJson(review);
    return await firstValueFrom(this.http.post<Review>(this.reviewUrl, body, { headers}));
  }

  async delete(id: number): Promise<any> {
    await this.http.delete(`${this.reviewUrl}/${id}`)
      .toPromise();
    return null;
  }
}
