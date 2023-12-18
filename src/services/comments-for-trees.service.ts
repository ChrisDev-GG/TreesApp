import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsForTreesService {

  private baseUrl = 'http://localhost:3300'; // URL servidor de Express

  constructor(private http: HttpClient) {}

  sendComments(comentario: string, id: number): Observable<any> {
    const body = { comentario, id };
    return this.http.post<any>(`${this.baseUrl}/send-comment`, body);
  }
}
