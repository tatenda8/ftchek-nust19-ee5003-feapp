import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
// import { environment } from 'src/environments/environment';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SearchItemsService {

  constructor(private http: HttpClient) { }

  searchFoundItems(keywords: any) {
    const httpParams = new HttpParams().set('value', keywords.attributeVal);
    return this.http.get<any>(`${environment.baseUrl}/pm/search-found-item`, { params: httpParams });
  }

  searchLostItems(keywords: any) {
    const httpParams = new HttpParams().set('value', keywords.attributeVal);
    return this.http.get<any>(`${environment.baseUrl}/search-lost-item`, { params: httpParams });
  }
}

