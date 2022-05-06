import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ArtistDetail } from './artist-detail';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private apiUrl: string = environment.baseUrl + 'artists';

  constructor(private http: HttpClient) { }

    getArtists(): Observable<ArtistDetail[]> {
      console.log(this.apiUrl)
      return this.http.get<ArtistDetail[]>(this.apiUrl);
    }

}
