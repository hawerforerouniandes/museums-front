import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExhibitionModule } from './exhibition/exhibition.module';
import { MuseumModule } from './museum/museum.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MuseumModule,
    ExhibitionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
