import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Artist } from './artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private apiUrl: string = environment.baseUrl + 'artists';

  constructor(private http: HttpClient) { }

    getArtists(): Observable<Artist[]> {
      console.log(this.apiUrl)
      return this.http.get<Artist[]>(this.apiUrl);
    }

}
