import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExhibitionListComponent } from './exhibition-list/exhibition-list.component';
import { ExhibitionRoutingModule } from './exhibition-routing.module';
import { ExhibitionDetailComponent } from './exhibition-detail/exhibition-detail.component';
import { ExhibitionCreateComponent } from './exhibition-create/exhibition-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ExhibitionRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ExhibitionListComponent, ExhibitionDetailComponent, ExhibitionCreateComponent]
})
export class ExhibitionModule { }
