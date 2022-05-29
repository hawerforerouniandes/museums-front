import { Component, Input, OnInit } from '@angular/core';
import { ArtworkImage } from '../artwork-image';
import { ArtworkImageService } from '../artwork-image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  @Input() artworkId!: number;
  @Input() artistId!: number;
  @Input() images: ArtworkImage[] = []

  constructor(
    private artworkImageService: ArtworkImageService
  ) { }

  getImages(artistId: number, artworkId: number) {
    this.artworkImageService.imagesForArtwork(artistId, artworkId).subscribe((images) => {
      this.images = images
    });
  }
  ngOnInit() {
    if (this.artworkId != undefined && this.artistId) {
      this.getImages(this.artistId, this.artworkId);
    }
  }

  onSelected(image: ArtworkImage): void {
    window.open(image.source);
  }
}
