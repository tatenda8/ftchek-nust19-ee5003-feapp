import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgentApplicationService {

  constructor(private http: HttpClient) { }

  public getAllApplis(page: string) {
    const httpParams = new HttpParams().set('page', page);
    return this.http.get<any>(`${environment.baseUrl}/agent-applications/all`, {params: httpParams});
  }

  public getAppli(id: string | number) {
    return this.http.get<any>(`${environment.baseUrl}/agent-applications/${id}`);
  }

  public deleteAppli(id: string | number) {
    return this.http.delete<any>(`${environment.baseUrl}/agent-applications/delete/${id}`);
  }

  public editAppli(id: string | number, user: any) {
    return this.http.put<any>(`${environment.baseUrl}/pm/agent-applications/update/${id}`, user );
  }

  public saveAppli(appli: any) {
    return this.http.post<any>(`${environment.baseUrl}/pm/agent-applications/new`, appli );
  }

}
