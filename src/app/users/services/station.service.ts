import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
// import { environment } from 'src/environments/environment';
import { environment } from '../../../environments/environment';
import { Station } from '../models/station';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  constructor(private http: HttpClient) { }

  public getAllStations(page: string) {
    const httpParams = new HttpParams().set('page', page);
    return this.http.get<any>(`${environment.baseUrl}/pm/stations`, {params: httpParams});
  }

  public getStations() {
    return this.http.get<any>(`${environment.baseUrl}/v2/stations`);
  }

  public getStation(id: string | number) {
    return this.http.get<any>(`${environment.baseUrl}/stations/${id}`);
  }

  public deleteStation(id: string | number) {
    return this.http.delete<any>(`${environment.baseUrl}/stations/delete/${id}`);
  }

  public editStation(id: string | number, station: Station) {
    return this.http.put<any>(`${environment.baseUrl}/stations/update/${id}`, station );
  }

  public saveStation(station: any) {
    return this.http.post<any>(`${environment.baseUrl}/stations/new`, station );
  }
}
