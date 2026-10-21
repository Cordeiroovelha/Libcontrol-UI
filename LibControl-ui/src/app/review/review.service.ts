import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  ReviewUrl = 'http://localhost:8080/reviews'

  constructor(private http: HttpClient) { }

  async list(): Promise<any> {
    return await firstValueFrom(this.http.get(this.ReviewUrl));
  }
}
