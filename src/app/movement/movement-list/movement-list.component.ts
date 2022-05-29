import { Component, OnInit } from '@angular/core';
import { Movement } from '../movement';
import { MovementService } from '../movement.service';

@Component({
  selector: 'app-movement-list',
  templateUrl: './movement-list.component.html',
  styleUrls: ['./movement-list.component.css']
})
export class MovementListComponent implements OnInit {

  movements: Array<Movement> = [];

  constructor(private movementService: MovementService) { }

  getMovements(): void {
    this.movementService.getMovemnets()
    .subscribe((movements) => {
      this.movements = movements;
    });
  }

  ngOnInit() {
    this.getMovements();
  }

}
