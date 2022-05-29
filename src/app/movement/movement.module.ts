import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovementListComponent } from './movement-list/movement-list.component';
import { MovementRoutingModule } from './movement-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MovementCreateComponent } from './movement-create/movement-create.component';

@NgModule({
  imports: [
    CommonModule,
    MovementRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MovementListComponent, MovementCreateComponent]
})
export class MovementModule { }
