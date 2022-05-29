import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Artist } from '../Artist';
import { ArtistService } from '../artist.service';

@Component({
  selector: 'app-artist-create',
  templateUrl: './artist-create.component.html',
  styleUrls: ['./artist-create.component.css']
})
export class ArtistCreateComponent implements OnInit {

  artistForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private artistService: ArtistService
  ) { }

  createArtist(artist: Artist) {
    this.artistService.create(artist).subscribe(artist =>{
      console.info("The artist was created:", artist);
      this.toastr.success("Confirmation", "Author created");
      this.artistForm.reset();
    });
  }

  cancelCreation(){
    this.artistForm.reset();
  }

  ngOnInit() {
    this.artistForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(5)]],
      birthplace: ["", Validators.required],
      birthdate:["", Validators.required],
      image: ["", [Validators.required]],
    });
  }

}
