import { Component, OnInit } from '@angular/core';
import { ArtistDetail } from '../artist-detail';
import { ArtistService } from '../artist.service'

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {

  artists: Array<ArtistDetail> = []
  selectedArtist?: ArtistDetail;

  constructor(private artistService: ArtistService) { }

  getArtists():void {
    this.artistService.getArtists().subscribe((artists) => {
      this.artists = artists;
    });
  }

  ngOnInit() {
    this.getArtists();
  }

  onSelected(artist: ArtistDetail): void {
    document.body.style.height = '100vh';
    this.selectedArtist = artist;
  }

}
