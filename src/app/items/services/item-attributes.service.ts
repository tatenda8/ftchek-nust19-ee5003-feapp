import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
// import { environment } from 'src/environments/environment';
import { environment } from '../../../environments/environment';
import { ItemAttribute } from '../models/item-attribute';

@Injectable({
  providedIn: 'root'
})
export class ItemAttributesService {

  constructor(private http: HttpClient) { }

  public getAllItemAttributes(page: string) {
    const httpParams = new HttpParams().set('page', page);
    return this.http.get<any>(`${environment.baseUrl}/item-attributes`, { params: httpParams });
  }

  public getItemAttributes() {
    return this.http.get<any>(`${environment.baseUrl}/pm/v2/item-attributes`);
  }

  public getItemAttribute(id: string | number) {
    return this.http.get<any>(`${environment.baseUrl}/item-attributes/${id}`);
  }

  public deleteItemAttribute(id: string | number) {
    return this.http.delete<any>(`${environment.baseUrl}/item-attributes/delete/${id}`);
  }

  public editItemAttribute(id: string | number, itemAttribute: any) {
    return this.http.put<any>(`${environment.baseUrl}/item-attributes/update/${id}`, itemAttribute );
  }

  public saveItemAttribute(itemAttribute: any) {
    return this.http.post<any>(`${environment.baseUrl}/item-attributes/new`, itemAttribute );
  }

}
