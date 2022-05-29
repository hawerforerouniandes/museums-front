import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ArtworkImage } from './artwork-image';

@Injectable({
  providedIn: 'root'
})
export class ArtworkImageService {
  private apiUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }

  imagesForArtwork(artistId: number, artworkId: number) {
    return this.http.get<ArtworkImage[]>(`${this.apiUrl}artists/${artistId}/artworks/${artworkId}/images`)
  }
}
