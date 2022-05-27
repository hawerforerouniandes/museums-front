import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SponsorCreateComponent } from './sponsor-create/sponsor-create.component';
import { SponsorListComponent } from './sponsor-list/sponsor-list.component';
const routes: Routes = [
  {
    path: '',
    component: SponsorListComponent,
  },
  {
    path: 'list',
    component: SponsorListComponent,
  },
  {
    path: 'create',
    component: SponsorCreateComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SponsorRoutingModule { }
