import { Component, OnInit } from '@angular/core';
import { Artist } from '../Artist';
import { ArtistService } from '../artist.service'

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {

  artists: Array<Artist> = []

  constructor(private artistService: ArtistService) { }

  getArtists():void {
    this.artistService.getArtists().subscribe((artists) => {
      this.artists = artists;
    });
  }

  ngOnInit() {
    this.getArtists();
  }

}
