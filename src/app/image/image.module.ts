import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image.component';
import { ImageListComponent } from './image-list/image-list.component';
import { RouterModule } from '@angular/router';
import { ArtworkImageRoutes } from './artwork-image.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { ArtworkCreateComponent } from '../artwork/artwork-create/artwork-create.component';
import { ArtistCreateComponent } from '../artist/artist-create/artist-create.component';
import { ArtworkImageCreateComponent } from './artwork-image-create/artwork-image-create.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ArtworkImageRoutes,
    ReactiveFormsModule
  ],
  exports: [ImageListComponent],
  declarations: [ImageComponent, ImageListComponent, ArtworkImageCreateComponent]
})
export class ImageModule { }
