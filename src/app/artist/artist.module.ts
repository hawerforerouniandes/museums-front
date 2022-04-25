import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistListComponent } from './artist-list/artist-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ArtistListComponent],
  declarations: [ArtistListComponent]
})
export class ArtistModule { }
