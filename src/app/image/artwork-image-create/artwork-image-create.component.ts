import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ArtworkImage } from '../artwork-image';
import { ArtworkImageService } from '../artwork-image.service';

@Component({
  selector: 'app-artwork-image-create',
  templateUrl: './artwork-image-create.component.html',
  styleUrls: ['./artwork-image-create.component.css']
})
export class ArtworkImageCreateComponent implements OnInit {

  artistId!: number;
  artworkId!: number;

  imageForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private artworkImageService: ArtworkImageService
  ) { }

  create(image: ArtworkImage) {
    this.artworkImageService.create(this.artistId, this.artworkId, image).subscribe(artworkImage => {
      console.info("The artwork image was created", artworkImage);
      this.toastr.success("Confirmation", "Artwork image created");
      this.imageForm.reset();
    });
  }

  cancel() {
    this.imageForm.reset()
  }

  ngOnInit() {
    this.artistId = this.route.snapshot.params['artistId'];
    this.artworkId = this.route.snapshot.params['artworkId'];
    this.imageForm = this.formBuilder.group({
      source: ["", Validators.required],
      altText: ["", Validators.required],
      height: ["", Validators.required],
      width: ["", Validators.required],
    });
  }

}
