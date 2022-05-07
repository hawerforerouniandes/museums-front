import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtworkDetailComponent } from './artwork-detail/artwork-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ArtworkDetailComponent
  },
  {
    path: ':id',
    component: ArtworkDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ArtworkRoutingRoutes {}
//export const ArtworkRoutingRoutes = RouterModule.forChild(routes);
