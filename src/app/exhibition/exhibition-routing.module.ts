import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExhibitionCreateComponent } from './exhibition-create/exhibition-create.component';
import { ExhibitionDetailComponent } from './exhibition-detail/exhibition-detail.component';
import { ExhibitionListComponent } from './exhibition-list/exhibition-list.component';
const routes: Routes = [
  {
    path: 'create',
    component: ExhibitionCreateComponent,
  },
  {
    path: ':id',
    component: ExhibitionDetailComponent,
  },
  {
    path: '',
    component: ExhibitionListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ExhibitionRoutingModule { }
