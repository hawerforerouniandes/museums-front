import { Component, OnInit } from '@angular/core';
import { Exhibition } from '../exhibition';
import { ExhibitionService } from '../exhibition.service';

@Component({
  selector: 'app-exhibition-list',
  templateUrl: './exhibition-list.component.html',
  styleUrls: ['./exhibition-list.component.css']
})
export class ExhibitionListComponent implements OnInit {

  exhibitions: Array<Exhibition> = [];

  constructor(private exhibitionService: ExhibitionService) { }

  getExhibitions(museo: any): void {
    this.exhibitionService.getExhibitions(museo).subscribe((exhibitions) => {
      this.exhibitions = exhibitions;
    });
  }

  ngOnInit() {
    this.getExhibitions(100);

  }

}
