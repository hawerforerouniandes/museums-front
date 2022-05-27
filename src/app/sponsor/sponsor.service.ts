import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sponsor } from './sponsor';

@Injectable({
  providedIn: 'root'
})
export class SponsorService {

private apiUrl: string = environment.baseUrl + 'sponsors';


constructor(private http: HttpClient) { }
  getSponsors(): Observable<Sponsor[]> {
    return this.http.get<Sponsor[]>(this.apiUrl).pipe(
      catchError(err=> throwError(() => new Error('error en el servicio')))
    )
  }
}
