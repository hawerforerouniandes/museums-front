import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SponsorListComponent } from './sponsor-list/sponsor-list.component';
import { SponsorRoutingModule } from './sponsor-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SponsorCreateComponent } from './sponsor-create/sponsor-create.component';

@NgModule({
  imports: [
    CommonModule,
    SponsorRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SponsorListComponent, SponsorCreateComponent]
})
export class SponsorModule { }
