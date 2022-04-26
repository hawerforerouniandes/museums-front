/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { ArtistListComponent } from './artist-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ArtistService } from '../artist.service';
import { Artist } from '../artist';

describe('ArtistListComponent', () => {
  let component: ArtistListComponent;
  let fixture: ComponentFixture<ArtistListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ArtistListComponent ],
      providers: [ ArtistService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistListComponent);
    component = fixture.componentInstance;

    component.artists = [
      new Artist(
        1,
        `{faker.name.firstName()} {faker.name.lastName()}`,
        faker.address.cityName(),
        faker.date.past().toString(),
        faker.image.imageUrl()
        ),
    ];

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an img element ', () => {
    expect(debug.query(By.css('img')).attributes['alt']).toEqual(
      component.artists[0].name
    );
  });

});
