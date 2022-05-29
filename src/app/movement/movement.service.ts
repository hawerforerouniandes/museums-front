import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movement } from './movement';

@Injectable({
  providedIn: 'root'
})
export class MovementService {

private apiUrl: string = environment.baseUrl + 'movements';

constructor(private http: HttpClient) { }

getMovemnets(): Observable<Movement[]> {
  return this.http.get<Movement[]>(this.apiUrl).pipe(
    catchError(err=> throwError(() => new Error('error en el servicio')))
  )
}

createMovement(movement: Movement): Observable<Movement> {
  return this.http.post<Movement>(this.apiUrl, movement);
}

}
