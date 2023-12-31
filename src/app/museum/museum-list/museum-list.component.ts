import { Component, OnInit } from '@angular/core';
import { Museum } from '../museum';
import { MuseumService } from '../museum.service';


@Component({
  selector: 'app-museum-list',
  templateUrl: './museum-list.component.html',
  styleUrls: ['./museum-list.component.css']
})
export class MuseumListComponent implements OnInit {

  museums: Array<Museum> = [];
  selected: Boolean = false;
  selectedMuseum!: number;


  constructor(private museumService: MuseumService) { }

  getMuseums(): void {
    this.museumService.getMuseums()
    .subscribe((museums) => {
      this.museums = museums;
    });
  }

  ngOnInit() {
    this.getMuseums();
  }

  onSelected(museum: number): void {
    this.selected = true;
    this.selectedMuseum = museum;
  }

}
