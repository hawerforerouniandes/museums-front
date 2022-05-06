import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistRoutingModule } from './artist-routing.module';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ArtistRoutingModule
  ],
  exports: [ArtistListComponent, ArtistDetailComponent],
  declarations: [ArtistListComponent, ArtistDetailComponent]
})
export class ArtistModule { }
