import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Exhibition } from '../exhibition';
import { ExhibitionService } from '../exhibition.service';

@Component({
  selector: 'app-exhibition-list',
  templateUrl: './exhibition-list.component.html',
  styleUrls: ['./exhibition-list.component.css']
})
export class ExhibitionListComponent implements OnInit {

  exhibitions: Array<Exhibition> = [];
  idMuseum: number = 0;

  constructor(private exhibitionService: ExhibitionService,
              private route: ActivatedRoute,) { }

  getExhibitions(museo: any): void {
    this.exhibitionService.getExhibitions(museo).subscribe((exhibitions) => {
      this.exhibitions = exhibitions;
    });
  }

  ngOnInit() {
    this.idMuseum = this.route.snapshot.params['id'];
    this.getExhibitions(this.idMuseum);

  }

}
