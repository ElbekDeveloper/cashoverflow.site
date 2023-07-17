import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalariesService {

  private baseUrl = 'https://cashoverflow-api.azurewebsites.net/api/Salaries';

  constructor(private http: HttpClient) { }

  public createSalary(salary: any): Observable<any> {
    return this.http.post(this.baseUrl, salary);
  }

  public getSalary(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }
}
