import { Component, Input, OnInit } from '@angular/core';
import { ArtistDetail } from '../artist-detail';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent implements OnInit {

  @Input() artistDetail?: ArtistDetail;

  constructor() { }

  ngOnInit() {
  }

}
