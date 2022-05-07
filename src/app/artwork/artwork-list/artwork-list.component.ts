import { Component, Input, OnInit } from '@angular/core';
import { Artwork } from '../Artwork';
import { ArtworkService } from '../artwork.service';



@Component({
  selector: 'app-artwork-list',
  templateUrl: './artwork-list.component.html',
  styleUrls: ['./artwork-list.component.css']
})
export class ArtworkListComponent implements OnInit {

  @Input() artworks?: Array<Artwork> = [];

  constructor(private artworkService: ArtworkService) { }

  getArtworks(): void {
    this.artworkService.getArtworks().subscribe((artworks) => {
      this.artworks = artworks;
    });
  }

  ngOnInit() {
    this.getArtworks();
  }

}
