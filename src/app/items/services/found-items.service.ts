import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { environment } from 'src/environments/environment';
import { environment } from '../../../environments/environment';
import { FoundItem } from '../models/found-item';

@Injectable({
  providedIn: 'root'
})
export class FoundItemsService {


  constructor(private http: HttpClient) { }



  getAllFoundItems(page: string) {
    const httpParams = new HttpParams().set('page', page);
    return this.http.get<any>(`${environment.baseUrl}/found-items`, { params: httpParams });
  }

  public getFoundItem(id: string | number) {
    return this.http.get<any>(`${environment.baseUrl}/found-items/${id}`);
  }

  public deleteFoundItem(id: string | number) {
    return this.http.delete<any>(`${environment.baseUrl}/found-items/delete/${id}`);
  }

  public editFoundItem(id: string | number, foundItem: any) {
    return this.http.put<any>(`${environment.baseUrl}/found-items/update/${id}`, foundItem);
  }

  public saveFoundItem(foundItem: any) {
    return this.http.post<any>(`${environment.baseUrl}/found-items/new`, foundItem);
  }

  public getFoundItemsByStation(sId: any) {
    const httpParams = new HttpParams().set('stationId', sId );
    return this.http.get<any>(`${environment.baseUrl}/found-items/station/search`, { params: httpParams });
  }


}


