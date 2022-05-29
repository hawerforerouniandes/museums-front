import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtworkListComponent } from './artwork-list/artwork-list.component';
import { ArtworkRoutingRoutes } from './artwork-routing';
import { ArtworkDetailComponent } from './artwork-detail/artwork-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ArtworkCreateComponent } from './artwork-create/artwork-create.component';
import { RouterModule } from '@angular/router';
import { ImageModule } from '../image/image.module';

@NgModule({
  imports: [
    CommonModule,
    ArtworkRoutingRoutes,
    ImageModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [ArtworkListComponent],
  declarations: [ArtworkListComponent, ArtworkDetailComponent, ArtworkCreateComponent]
})
export class ArtworkModule { }
