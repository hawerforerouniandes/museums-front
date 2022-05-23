import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuseumListComponent } from './museum-list/museum-list.component';
import { MuseumCreateComponent } from './museum-create/museum-create.component';
import { MuseumDetailComponent } from './museum-detail/museum-detail.component';
import { MuseumRoutingModule } from './museum-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MuseumRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MuseumListComponent, MuseumDetailComponent, MuseumCreateComponent]

})
export class MuseumModule { }
