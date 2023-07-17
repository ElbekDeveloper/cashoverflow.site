import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

  private baseUrl = 'https://cashoverflow-api.azurewebsites.net/api/Languages'

  constructor(private http: HttpClient) { }

  public createLanguage(language: any): Observable<any>{
    return this.http.post(this.baseUrl, language);
  }

  public getLanguage(): Observable<any>{
    return this.http.get<any>(this.baseUrl);
  }

  public getLanguagebyID(languageId: string): Observable<any> {
    const url = `${this.baseUrl}/${languageId}`;
    return this.http.get<any>(url);
  }

  public updateLanguage(updatedlanguage: any): Observable<any>{
    return this.http.put(this.baseUrl, updatedlanguage);
  }

  public deleteLanguage(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url);
  }
}
