import { Routes, RouterModule } from '@angular/router';
import { ArtistListComponent } from './artist-list/artist-list.component';

const routes: Routes = [
  {
    path: '',
    component: ArtistListComponent,
  },
  {
    path: ':id/artworks',
    loadChildren: () =>
      import('../artwork/artwork.module').then((m) => m.ArtworkModule)
  },
];

export const ArtistRoutingRoutes = RouterModule.forChild(routes);
