import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError as observaBleThrowError } from 'rxjs';
import { Parent } from '../interfaces/parents.interface';
import { Children } from '../interfaces/children.interface';
import { Language } from '../interfaces/language.interface';

@Injectable({
  providedIn: 'root'
})
export class ParentsService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getParents(): Observable<Parent[]> {
    return this.http.get<Parent[]>(`${this.baseUrl}/nodes`);
  }


  getParentById(id: number,): Observable<Parent> {
    return this.http.get<Parent>(`${this.baseUrl}/node/${id}?locale=es_ES`);
  }

  getChildrensByParentId(id: number): Observable<Children[]> {
    return this.http.get<Children[]>(`${this.baseUrl}/nodes?parent=${id}`)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  errorHandler(error: HttpErrorResponse) {
    return observaBleThrowError(error.message);
  }

  getLocales(): Observable<Language[]> {
    return this.http.get<Language[]>(`${this.baseUrl}/locales`)
  }

  createChildren(id: Number, local: String) {
    this.http.post<Children>(`${this.baseUrl}/node`, { "parent": id, locales: [local] })
      .subscribe(res => {
        return res;
      })


  }

  deleteNode(id: any) {
    this.http.delete<any>(`${this.baseUrl}/node/${id}`).subscribe(res => console.log(res))
  }
}
