import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MuseumDetailComponent } from './museum-detail/museum-detail.component';
import { MuseumListComponent } from './museum-list/museum-list.component';
const routes: Routes = [
  {
    path: '',
    component: MuseumListComponent,
  },
  {
    path: ':id',
    component: MuseumDetailComponent
  },
  {
    path: ':id/exhibitions',
    loadChildren: () =>
      import('../exhibition/exhibition.module').then((m) => m.ExhibitionModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MuseumRoutingModule { }
