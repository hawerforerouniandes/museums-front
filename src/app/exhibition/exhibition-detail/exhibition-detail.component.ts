import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Exhibition } from '../exhibition';
import { ExhibitionService } from '../exhibition.service';

@Component({
  selector: 'app-exhibition-detail',
  templateUrl: './exhibition-detail.component.html',
  styleUrls: ['./exhibition-detail.component.css']
})
export class ExhibitionDetailComponent implements OnChanges {

  @Input() exhibitionDetail!: number;
  @Input() museumDetail!: number;
  exhibition!: Exhibition;

  constructor(private exhibitionService: ExhibitionService) { }

  getExhibition(museo:number, id: number): void {
    this.exhibitionService.getExhibition(museo, id).subscribe((exhibition) => {
      this.exhibition = exhibition;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getExhibition(this.museumDetail, this.exhibitionDetail);
  }

}
