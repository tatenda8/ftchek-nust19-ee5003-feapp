import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
// import { environment } from 'src/environments/environment';
import { environment } from '../../../environments/environment';

import { ItemType } from '../models/item-type';

@Injectable({
  providedIn: 'root'
})
export class ItemTypesService {

  constructor(private http: HttpClient) { }

  public getAllItemTypes(page: string) {
    const httpParams = new HttpParams().set('page', page);
    return this.http.get<any>(`${environment.baseUrl}/item-types`, {params: httpParams});
  }

  public getItemTypes() {
    return this.http.get<any>(`${environment.baseUrl}/pm/v2/item-types`);
  }

  public getItemType(id: string | number) {
    return this.http.get<any>(`${environment.baseUrl}/item-types/${id}`);
  }

  public deleteItemType(id: string | number) {
    return this.http.delete<any>(`${environment.baseUrl}/item-types/delete/${id}`);
  }

  public editItemType(id: string | number, itemType: any) {
    return this.http.put<any>(`${environment.baseUrl}/item-types/update/${id}`, itemType );
  }

  public saveItemType(itemType: any) {
    return this.http.post<any>(`${environment.baseUrl}/item-types/new`, itemType );
  }




}
