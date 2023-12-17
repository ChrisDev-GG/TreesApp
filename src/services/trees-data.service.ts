import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreesDataService {

  private baseUrl = 'http://localhost:3300'; // URL servidor de Express

  constructor(private http: HttpClient) { }

  // Obtencion de datos masiva de las tablas
  getTreesData(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/trees`);
  }
  getLocationsData(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/locations`);
  }
  getPhotosData(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/photos`);
  }

  // Obtencion de datos filtrados y fusionados de las tablas
  getTreesAndLocationsData(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/trees-and-locations`);
  }
  getTreeAndLocationByIdData(id:BigInteger): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/trees-and-location/${id}`);
  }
}
