import { Routes, RouterModule } from '@angular/router';
import { ArtworkImageCreateComponent } from './artwork-image-create/artwork-image-create.component';

const routes: Routes = [
  {
    path: 'artists/:artistId/artworks/:artworkId/images',
    component: ArtworkImageCreateComponent
  },
];

export const ArtworkImageRoutes = RouterModule.forChild(routes);
