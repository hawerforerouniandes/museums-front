import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovementCreateComponent } from './movement-create/movement-create.component';
import { MovementListComponent } from './movement-list/movement-list.component';
const routes: Routes = [
  {
    path: '',
    component: MovementListComponent,
  },
  {
    path: 'list',
    component: MovementListComponent,
  },
  {
    path: 'create',
    component: MovementCreateComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MovementRoutingModule { }
