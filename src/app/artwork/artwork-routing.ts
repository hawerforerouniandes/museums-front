import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistListComponent } from '../artist/artist-list/artist-list.component';
import { ArtworkDetailComponent } from './artwork-detail/artwork-detail.component';
import { ArtworkListComponent } from './artwork-list/artwork-list.component';

const routes: Routes = [
  {
    path: ':id',
    component: ArtworkDetailComponent
  },
  {
    path: '',
    component: ArtworkListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ArtworkRoutingRoutes {}
