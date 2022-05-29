import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ArtistService } from 'src/app/artist/artist.service';
import { Artwork } from '../Artwork';
import { ArtworkService } from '../artwork.service';

@Component({
  selector: 'app-artwork-create',
  templateUrl: './artwork-create.component.html',
  styleUrls: ['./artwork-create.component.css']
})
export class ArtworkCreateComponent implements OnInit {

  artworkForm!: FormGroup;
  artistId!: number;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private artworkService: ArtworkService,
    private artistService: ArtistService
    ) { }

    create(artwork: Artwork) {
      this.artistService.createArtwork(this.artistId, artwork).subscribe(artwork => {
        console.info("The artwork was created:", artwork);
        this.toastr.success("Confirmation", "Artwork created");
        this.artworkForm.reset();
      });
    }

    cancelCreation(){
      this.artworkForm.reset();
    }

    ngOnInit() {
      this.artistId = this.route.snapshot.params['id'];
      this.artworkForm = this.formBuilder.group({
        name: ["", [Validators.required, Validators.minLength(4)]],
        description: ["", [Validators.required, Validators.minLength(4)]],
        year: ["", [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
        type: ["", [Validators.required, Validators.minLength(4)]],
        mainImage: ["", [Validators.required, Validators.minLength(4)]]
      });
    }

  }
