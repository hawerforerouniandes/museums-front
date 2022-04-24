import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuseumListComponent } from './museum-list/museum-list.component';
import { MuseumCreateComponent } from './museum-create/museum-create.component';
import { MuseumDetailComponent } from './museum-detail/museum-detail.component';
import { MuseumRoutingModule } from './museum-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MuseumRoutingModule
  ],
  declarations: [MuseumListComponent, MuseumCreateComponent, MuseumDetailComponent]

})
export class MuseumModule { }
