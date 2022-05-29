import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artwork } from '../Artwork';
import { ArtworkService } from '../artwork.service';

@Component({
  selector: 'app-artwork-detail',
  templateUrl: './artwork-detail.component.html',
  styleUrls: ['./artwork-detail.component.css']
})
export class ArtworkDetailComponent implements OnInit {

  @Input() artworkDetail?: Artwork;
  @Input() artistId?: number;
  artworkId?: String;

  constructor(
    private route: ActivatedRoute,
    private artworkService: ArtworkService
  ) { }

  getArtwork(id: String) {
    this.artworkService.getArtwork(id).subscribe((artworkDetail) => {
      this.artworkDetail = artworkDetail
    });
  }

  ngOnInit() {
    if(this.artworkDetail === undefined){
      this.artworkId = this.route.snapshot.params['id'];
      this.getArtwork(this.artworkId!);
    }
  }

}
