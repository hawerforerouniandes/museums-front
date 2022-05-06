/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ArtworkListComponent } from './artwork-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ArtworkService } from '../artwork.service';
import { Artwork } from '../Artwork';
import faker from '@faker-js/faker';

describe('ArtworkListComponent', () => {
  let component: ArtworkListComponent;
  let fixture: ComponentFixture<ArtworkListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
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
        faker.random.number(),
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

  it('should have an img element ', () => {
    expect(debug.query(By.css('img')).attributes['alt']).toEqual(
      component.artworks[0].name
    );
  });
});
