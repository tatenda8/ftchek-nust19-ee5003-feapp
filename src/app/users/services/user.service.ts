import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
// import { environment } from 'src/environments/environment';
import { environment } from '../../../environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }

  public getAllUsers(page: string) {
    const httpParams = new HttpParams().set('page', page);
    return this.http.get<any>(`${environment.baseUrl}/users`, {params: httpParams});
  }

  public getAllAgents(group: any) {
    const httpParams = new HttpParams().set('groupName', group.name );
    return this.http.get<any>(`${environment.baseUrl}/users/group/search`, {params: httpParams});
      }

  public getUser(id: string | number) {
    return this.http.get<any>(`${environment.baseUrl}/users/${id}`);
  }

  public deleteUser(id: string | number) {
    return this.http.delete<any>(`${environment.baseUrl}/users/delete/${id}`);
  }

  public editUser(id: string | number, user: any) {
    return this.http.put<any>(`${environment.baseUrl}/users/update/${id}`, user );
  }

  public saveUser(user: any) {
    return this.http.post<any>(`${environment.baseUrl}/users/new`, user );
  }

  public changePassword(cp: any) {
    const header = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(`${environment.baseUrl}/users/change-password`, cp, {headers: header});
  }

  public changeStatus(id: string | number, active: string) {
    const httpParams = new HttpParams().set('active', active );
    return this.http.put<any>(`${environment.baseUrl}/users/status/${id}`, {}, {params: httpParams});
  }
}
