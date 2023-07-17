import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  private baseUrl = 'https://cashoverflow-api.azurewebsites.net/api/Locations'

  constructor(private http: HttpClient) { }

  public createLocation(location: any): Observable<any>{
    return this.http.post(this.baseUrl, location);
  }

  public getLocation(): Observable<any>{
    return this.http.get<any>(this.baseUrl);
  }

  public getLocationbyID(locationId: string): Observable<any> {
    const url = `${this.baseUrl}/${locationId}`;
    return this.http.get<any>(url);
  }
  
  public updateLocation(updatedlocation: any): Observable<any>{
    return this.http.put(this.baseUrl, updatedlocation);
  }

  public deleteLocation(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url);
  }
}
