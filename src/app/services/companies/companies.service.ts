import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  private baseUrl = 'https://cashoverflow-api.azurewebsites.net/api/Companies'

  constructor(private http: HttpClient) { }

  
  public createCompany(company: any): Observable<any> {
    return this.http.post(this.baseUrl, company);
  }

  public getCompany(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  public updateCompany(updatedCompany: any): Observable<any> {
    return this.http.put(this.baseUrl, updatedCompany);
  }

  public deleteCompany(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url);
  }
}
