import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Sponsor } from '../sponsor';
import { SponsorService } from '../sponsor.service';

@Component({
  selector: 'app-sponsor-create',
  templateUrl: './sponsor-create.component.html',
  styleUrls: ['./sponsor-create.component.css']
})
export class SponsorCreateComponent implements OnInit {

  sponsorForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private sponsorService: SponsorService,
    private router: Router
  ) { }

  createSponsor(sponsor: Sponsor){
    this.sponsorService.createSponsor(sponsor).subscribe(sponsor=>{
      console.info("The sponsor was created: ", sponsor)
      this.toastr.success("Confirmation", "Sponsor created")
      this.sponsorForm.reset();
      this.router.navigate(['/sponsors/list']);    })
  }

  cancelCreation(){
    this.sponsorForm.reset();
    this.router.navigate(['/sponsors/list']);
  }

  ngOnInit() {
    this.sponsorForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      description: ["", [Validators.required]],
      website: ["", Validators.required],
      })
  }

}
