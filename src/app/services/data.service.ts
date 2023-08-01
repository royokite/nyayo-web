import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = 'https://my-json-server.typicode.com/royokite/nyayo-web/db';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl)
      .pipe(
        catchError(error => {
          console.error('Error fetching data: ', error);
          return [];
        })
      );
  }

}
