import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Artwork } from '../artwork/Artwork';
import { Artist } from './Artist';
import { ArtistDetail } from './artist-detail';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private apiUrl: string = environment.baseUrl + 'artists';

  constructor(private http: HttpClient) { }

  getArtist(id: String) {
    let urn = "/"+id
    return this.http.get<ArtistDetail>(this.apiUrl+urn);
  }

  getArtists(): Observable<ArtistDetail[]> {
    console.log(this.apiUrl)
    return this.http.get<ArtistDetail[]>(this.apiUrl);
  }

  getArtworks(artistId: any): Observable<Artwork[]> {
    console.log(this.apiUrl)
    let urn = "/"+artistId+"/artworks/"
    return this.http.get<Artwork[]>(this.apiUrl+urn);
  }

  create(artist: Artist): Observable<Artist>{
    return this.http.post<Artist>(this.apiUrl, artist)
  }

}
