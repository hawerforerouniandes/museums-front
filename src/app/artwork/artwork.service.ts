import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Artwork } from './Artwork';
import { ArtworkDetail } from './artwork-detail';

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {
  private apiUrl: string = environment.baseUrl + 'artworks';
  constructor(private http: HttpClient) { }

  getArtwork(id: number): Observable<ArtworkDetail> {
    let url = `${this.apiUrl}/${id}`;
    return this.http.get<ArtworkDetail>(url);
  }
}
