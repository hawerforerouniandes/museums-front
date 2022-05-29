import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistDetail } from '../artist-detail';
import { ArtistService } from '../artist.service';


@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent implements OnInit {

  @Input() artistDetail?: ArtistDetail;
  artistId?: String

  constructor(
    private artistService: ArtistService,
    private route: ActivatedRoute
    ) {}

  getArtist(id: String): void {
    this.artistService.getArtist(id).subscribe((artistDetail) => {
      this.artistDetail = artistDetail
    });
  }

  ngOnInit() {
    if(this.artistDetail === undefined){
      this.artistId = this.route.snapshot.params['id'];
      this.getArtist(this.artistId!);
    }
  }

}
