import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
// import { environment } from 'src/environments/environment';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }


  public getAllGroups() {
    return this.http.get<any>(`${environment.baseUrl}/v2/groups`);
  }

  public getGroup(id: string | number) {
    return this.http.get<any>(`${environment.baseUrl}/groups/${id}`);
  }

  public deleteGroup(id: string | number) {
    return this.http.delete<any>(`${environment.baseUrl}/groups/delete/${id}`);
  }

  public editGroup(id: string | number, group: any) {
    return this.http.put<any>(`${environment.baseUrl}/groups/update/${id}`, group );
  }

  public saveGroup(group: any) {
    return this.http.post<any>(`${environment.baseUrl}/groups/new`, group );
  }
}
