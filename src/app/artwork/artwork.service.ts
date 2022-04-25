import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Artwork } from './Artwork';

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {
  private apiUrl: string = environment.baseUrl + 'artwork';
  constructor(private http: HttpClient) { }

  getArtworks(): Observable<Artwork[]> {
    return this.http.get<Artwork[]>(this.apiUrl);
  }
}
