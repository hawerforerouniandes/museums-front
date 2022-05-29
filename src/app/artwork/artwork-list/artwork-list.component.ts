import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistService } from 'src/app/artist/artist.service';
import { Artwork } from '../Artwork';
import { ArtworkService } from '../artwork.service';



@Component({
  selector: 'app-artwork-list',
  templateUrl: './artwork-list.component.html',
  styleUrls: ['./artwork-list.component.css']
})
export class ArtworkListComponent implements OnInit {

  @Input() artworks?: Array<Artwork> = [];
  idArtist: number = 0;
  constructor(private artworkService: ArtworkService,
              private artistService: ArtistService,
              private route: ActivatedRoute) { }


  getArtworks(artist: any): void {
    this.artistService.getArtworks(artist).subscribe((artworks) => {
      this.artworks = artworks;
    });
  }

  ngOnInit() {
    this.idArtist = this.route.snapshot.params['id'];
    this.getArtworks(this.idArtist);
  }

}
