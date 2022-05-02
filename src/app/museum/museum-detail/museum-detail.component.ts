import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Museum } from '../museum';
import { MuseumService } from '../museum.service';

@Component({
  selector: 'app-museum-detail',
  templateUrl: './museum-detail.component.html',
  styleUrls: ['./museum-detail.component.css']
})
export class MuseumDetailComponent implements OnChanges {

  @Input() museumDetail!: number;
  museum!: Museum;

  constructor(private museumService: MuseumService) {
   }

  getMuseum(id: number): void {
    this.museumService.getMuseum(id).subscribe((museum) => {
      this.museum = museum;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getMuseum(this.museumDetail);
  }

}
