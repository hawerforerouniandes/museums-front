import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SponsorListComponent } from './sponsor-list/sponsor-list.component';
import { SponsorRoutingModule } from './sponsor-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SponsorRoutingModule
  ],
  declarations: [SponsorListComponent]
})
export class SponsorModule { }
