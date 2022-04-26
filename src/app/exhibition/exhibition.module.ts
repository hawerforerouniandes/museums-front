import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExhibitionListComponent } from './exhibition-list/exhibition-list.component';
import { ExhibitionRoutingModule } from './exhibition-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ExhibitionRoutingModule
  ],
  declarations: [ExhibitionListComponent]
})
export class ExhibitionModule { }
