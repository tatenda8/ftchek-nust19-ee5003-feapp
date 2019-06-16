import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LostItem } from '../models/lost-item';

@Injectable({
  providedIn: 'root'
})
export class LostItemsService {

  constructor(private http: HttpClient) { }

  public getAllLostItems(page: string) {
    const httpParams = new HttpParams().set('page', page);
    return this.http.get<any>(`${environment.baseUrl}/lost-items`, {params: httpParams});
  }

  public getLostItem(id: string | number) {
    return this.http.get<any>(`${environment.baseUrl}/lost-items/${id}`);
  }

  public deleteLostItem(id: string | number) {
    return this.http.delete<any>(`${environment.baseUrl}/lost-items/delete/${id}`);
  }

  public editLostItem(id: string | number, lostItem: any) {
    return this.http.put<any>(`${environment.baseUrl}/pm/lost-items/update/${id}`, lostItem );
  }

  public saveLostItem(lostItem: any) {
    return this.http.post<any>(`${environment.baseUrl}/pm/lost-items/new`, lostItem );
  }
}
