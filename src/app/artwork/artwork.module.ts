import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtworkListComponent } from './artwork-list/artwork-list.component';
import { ArtworkRoutingRoutes } from './artwork-routing';
import { ArtworkDetailComponent } from './artwork-detail/artwork-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ArtworkRoutingRoutes
  ],
  exports: [ArtworkListComponent],
  declarations: [ArtworkListComponent, ArtworkDetailComponent]
})
export class ArtworkModule { }
