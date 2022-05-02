import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistRoutingModule } from './artist-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ArtistRoutingModule
  ],
  exports: [ArtistListComponent],
  declarations: [ArtistListComponent]
})
export class ArtistModule { }
