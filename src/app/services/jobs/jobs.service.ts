import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private baseUrl = 'https://cashoverflow-api.azurewebsites.net/api/Jobs'

  constructor(private http: HttpClient) { }

  
  public createJob(job: any): Observable<any>{
    return this.http.post(this.baseUrl, job);
  }

  public getJob(): Observable<any>{
    return this.http.get<any>(this.baseUrl);
  }

  public getJobbyID(jobId: string): Observable<any> {
    const url = `${this.baseUrl}/${jobId}`;
    return this.http.get<any>(url);
  }

  public updateJob(updateJob: any): Observable<any>{
    return this.http.put(this.baseUrl, updateJob);
  }

  public deleteJob(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url);
  }
}
