/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import faker from '@faker-js/faker';

import { ArtworkListComponent } from './artwork-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ArtworkService } from '../artwork.service';
import { Artwork } from '../Artwork';
import { RouterTestingModule } from '@angular/router/testing';

describe('ArtworkListComponent', () => {
  let component: ArtworkListComponent;
  let fixture: ComponentFixture<ArtworkListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule.withRoutes([])],
      declarations: [ ArtworkListComponent ],
      providers: [ ArtworkService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtworkListComponent);
    component = fixture.componentInstance;

    component.artworks = [
      new Artwork(
        faker.datatype.number(),
        faker.name.jobType(),
        faker.date.past().getFullYear(),
        faker.lorem.paragraph(),
        faker.lorem.word(),
        faker.image.abstract()
      )
    ];

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
