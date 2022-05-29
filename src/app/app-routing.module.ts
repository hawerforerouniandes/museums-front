import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'museums',
    loadChildren: () =>
      import('./museum/museum.module').then((m) => m.MuseumModule)
  },
  {
    path: 'artists',
    loadChildren: () =>
      import('./artist/artist.module').then((m) => m.ArtistModule)
  },
  {
    path: 'sponsors',
    loadChildren: () =>
      import('./sponsor/sponsor.module').then((m) => m.SponsorModule)
  },
  {
    path: 'artworks',
    loadChildren: () =>
      import('./artwork/artwork.module').then((m) => m.ArtworkModule)
  },
  {
    path: 'movements',
    loadChildren: () =>
      import('./movement/movement.module').then((m) => m.MovementModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
