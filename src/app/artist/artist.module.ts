import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistRoutingModule } from './artist-routing.module';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { ArtworkModule } from '../artwork/artwork.module';

@NgModule({
  imports: [
    CommonModule,
    ArtistRoutingModule,
    ArtworkModule
  ],
  exports: [ArtistListComponent, ArtistDetailComponent],
  declarations: [ArtistListComponent, ArtistDetailComponent]
})
export class ArtistModule { }
