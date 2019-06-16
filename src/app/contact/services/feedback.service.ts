import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
// import { environment } from 'src/environments/environment';
import { environment } from '../../../environments/environment';
import { Feedback } from '../models/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) { }

  public getAllFeedbacks(page: string) {
    const httpParams = new HttpParams().set('page', page);
    return this.http.get<any>(`${environment.baseUrl}/feedback/all`, { params: httpParams });
  }

  public getFeedback(id: string | number) {
    return this.http.get<any>(`${environment.baseUrl}/feedback/${id}`);
  }

  public deleteFeedback(id: string | number) {
    return this.http.delete<any>(`${environment.baseUrl}/feedback/delete/${id}`);
  }

  public editFeedback(id: string | number, feedback: Feedback) {
    return this.http.put<any>(`${environment.baseUrl}/pm/feedback/update/${id}`, feedback );
  }

  public saveFeedback(feedback: Feedback) {
    return this.http.post<any>(`${environment.baseUrl}/pm/feedback/new`, feedback );
  }

}
