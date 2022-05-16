import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { Museum } from './museum';


@Injectable({
  providedIn: 'root'
})
export class MuseumService {

private apiUrl: string = environment.baseUrl + 'museums';


constructor(private http: HttpClient) { }

  getMuseums(): Observable<Museum[]> {
    return this.http.get<Museum[]>(this.apiUrl).pipe(
      catchError(err=> throwError(() => new Error('error en el servicio')))
    )
  }



  getMuseum(id:number): Observable<Museum> {
    return this.http.get<Museum>(this.apiUrl+"/"+id);
  }

}
