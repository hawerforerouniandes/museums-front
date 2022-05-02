import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExhibitionListComponent } from './exhibition-list/exhibition-list.component';
import { ExhibitionRoutingModule } from './exhibition-routing.module';
import { ExhibitionDetailComponent } from './exhibition-detail/exhibition-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ExhibitionRoutingModule
  ],
  declarations: [ExhibitionListComponent, ExhibitionDetailComponent]
})
export class ExhibitionModule { }
