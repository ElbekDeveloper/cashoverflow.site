import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  private baseUrl = 'https://cashoverflow-api.azurewebsites.net/api/Reviews'

  constructor(private http: HttpClient) { }

  public createReview(review: any): Observable<any>{
    return this.http.post(this.baseUrl, review);
  }

  public getReview(): Observable<any>{
    return this.http.get<any>(this.baseUrl);
  }
}
