import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Sponsor } from 'src/app/sponsor/sponsor';
import { SponsorDetail } from 'src/app/sponsor/sponsor-detail';
import { SponsorService } from 'src/app/sponsor/sponsor.service';
import { Exhibition } from '../exhibition';
import { ExhibitionService } from '../exhibition.service';

@Component({
  selector: 'app-exhibition-create',
  templateUrl: './exhibition-create.component.html',
  styleUrls: ['./exhibition-create.component.css']
})
export class ExhibitionCreateComponent implements OnInit {

  exhibitionForm!: FormGroup;
  idMuseum: number = 0;
  sponsors: Array<SponsorDetail> = [];

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private exhibitionService: ExhibitionService,
    private router: Router,
    private route: ActivatedRoute,
    private sponsorService: SponsorService,
  ) { }

  createExhibition(exhibition: Exhibition){
    this.exhibitionService.createExhibition(this.idMuseum, exhibition).subscribe(exhibition=>{
      console.info("The exhibition was created: ", exhibition)
      this.toastr.success("Confirmation", "Exhibition created")
      this.exhibitionForm.reset();
      this.router.navigate(['/museums/'+this.idMuseum+'/exhibitions']);    })
  }

  cancelCreation(){
    this.exhibitionForm.reset();
    this.router.navigate(['/museums/'+this.idMuseum+'/exhibitions']);
  }

  getSponsors(): void {
    this.sponsorService.getSponsorsDetail()
    .subscribe((sponsors) => {

      sponsors.forEach(sponsor => {
        if(sponsor.exhibition == null){
          this.sponsors.push(sponsor);
        }
      });

    });
  }

  ngOnInit() {
    this.idMuseum = this.route.snapshot.params['id'];
    this.getSponsors();

    this.exhibitionForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      description: ["", [Validators.required]],
      sponsor: ["", [Validators.required]],
      })
  }

}
