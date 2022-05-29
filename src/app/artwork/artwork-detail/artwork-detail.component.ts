import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artwork } from '../Artwork';
import { ArtworkDetail } from '../artwork-detail';
import { ArtworkService } from '../artwork.service';

@Component({
  selector: 'app-artwork-detail',
  templateUrl: './artwork-detail.component.html',
  styleUrls: ['./artwork-detail.component.css']
})
export class ArtworkDetailComponent implements OnInit {

  @Input() artworkId?: number;

  artworkDetail?: ArtworkDetail;

  get artistId() {
    return this.artworkDetail?.artist.id
  }

  get artworkImages() {
    return this.artworkDetail?.images ?? []
  }

  constructor(
    private route: ActivatedRoute,
    private artworkService: ArtworkService
  ) { }

  getArtwork(id: number) {
    this.artworkService.getArtwork(id).subscribe((artworkDetail) => {
      this.artworkDetail = artworkDetail
    });
  }

  ngOnInit() {
    if(this.artworkId === undefined){
      this.artworkId = this.route.snapshot.params['id'];
    }
    this.getArtwork(this.artworkId!);
  }

}
