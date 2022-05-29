import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image.component';
import { ImageListComponent } from './image-list/image-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ImageListComponent],
  declarations: [ImageComponent, ImageListComponent]
})
export class ImageModule { }
