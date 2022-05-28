import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { Exhibition } from './exhibition';
import { Artwork } from '../artwork/Artwork';

@Injectable({
  providedIn: 'root'
})
export class ExhibitionService {

private apiUrl: string = environment.baseUrl;

constructor(private http: HttpClient) { }

  getExhibitions(museum: any): Observable<Exhibition[]> {
    var urn = "museums/"+museum+"/exhibitions";
    return this.http.get<Exhibition[]>(this.apiUrl+urn).pipe(
      catchError(err=> throwError(() => new Error('error en el servicio'))))
  }

  getExhibition(museum: number, id: number): Observable<Exhibition> {
    var urn = "museums/"+museum+"/exhibitions/"+id;
    return this.http.get<Exhibition>(this.apiUrl+urn);
  }

  createExhibition(museum: number, exhibition: Exhibition): Observable<Exhibition> {
    var urn = "museums/"+museum+"/exhibitions/";
    return this.http.post<Exhibition>(this.apiUrl+urn, exhibition);
  }

  addArtwork(exhibition: number, artwork: number): Observable<Artwork> {
    var urn = "exhibitions/"+exhibition+"/artworks/"+artwork;
    return this.http.post<Artwork>(this.apiUrl+urn, null);
  }
}
