import { Component, OnInit } from '@angular/core';
import { Sponsor } from '../sponsor';
import { SponsorService } from '../sponsor.service';

@Component({
  selector: 'app-sponsor-list',
  templateUrl: './sponsor-list.component.html',
  styleUrls: ['./sponsor-list.component.css']
})
export class SponsorListComponent implements OnInit {

  sponsors: Array<Sponsor> = [];

  constructor(
    private sponsorService: SponsorService,
  ) { }

  getSponsors(): void {
    this.sponsorService.getSponsors()
    .subscribe((sponsors) => {
      this.sponsors = sponsors;

    });
  }

  ngOnInit() {
    this.getSponsors();
  }

}
