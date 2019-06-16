import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
// import { environment } from 'src/environments/environment';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public signedIn: boolean;
  constructor(private http: HttpClient,
              private router: Router) { }

  login(logInCred: any) {
    const httpParams = new HttpParams().set('username', logInCred.username)
    .append('password', logInCred.password);
    console.log(httpParams);
    return this.http.post<any>(`${environment.baseUrl}/pm/login`, {}, {params: httpParams} );
  }

  public logout() {
    localStorage.clear();
    this.signedIn = false;
    this.router.navigate(['/home']);
  }

}
