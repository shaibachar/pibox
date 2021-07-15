import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PiService {
  endpoint= 'http://10.0.0.27:8080';

  constructor(private httpClient: HttpClient) { }

  runHello(){
    return this.httpClient.get(this.endpoint)
    .pipe(
      catchError(this.handleError('Error occured'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }  
}
