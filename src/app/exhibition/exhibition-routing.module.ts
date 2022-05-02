import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExhibitionDetailComponent } from './exhibition-detail/exhibition-detail.component';
import { ExhibitionListComponent } from './exhibition-list/exhibition-list.component';
const routes: Routes = [
  {
    path: '',
    component: ExhibitionListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ExhibitionRoutingModule { }
