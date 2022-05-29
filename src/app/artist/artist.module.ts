import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistRoutingModule } from './artist-routing.module';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { ArtworkModule } from '../artwork/artwork.module';
import { ArtistCreateComponent } from './artist-create/artist-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ArtistRoutingModule,
    RouterModule,
    ArtworkModule,
    ReactiveFormsModule
  ],
  exports: [ArtistListComponent, ArtistDetailComponent],
  declarations: [ArtistListComponent, ArtistDetailComponent, ArtistCreateComponent]
})
export class ArtistModule { }
