/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ArtistDetailComponent } from './artist-detail.component';
import faker from '@faker-js/faker';
import { ArtistDetail } from '../artist-detail';

describe('ArtistDetailComponent', () => {
  let component: ArtistDetailComponent;
  let fixture: ComponentFixture<ArtistDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistDetailComponent);
    component = fixture.componentInstance;

    component.artistDetail =
    new ArtistDetail(
      1,
      `${faker.name.firstName()} ${faker.name.lastName()}`,
      faker.address.cityName(),
      faker.date.past().toString(),
      faker.image.imageUrl(),
      [],
      []
      );

      fixture.detectChanges();
      debug = fixture.debugElement;
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should have an img element ', () => {
      expect(debug.query(By.css('img')).attributes['alt']).toEqual(
        `${component.artistDetail?.name} image`
        );
      });
    });
