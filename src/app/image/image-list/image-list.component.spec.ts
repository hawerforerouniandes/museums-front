/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ImageListComponent } from './image-list.component';
import faker from '@faker-js/faker';
import { ArtworkImage } from '../artwork-image';
import { HttpClientModule } from '@angular/common/http';

describe('ImageListComponent', () => {
  let component: ImageListComponent;
  let fixture: ComponentFixture<ImageListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ImageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageListComponent);
    component = fixture.componentInstance;

    component.images = [
      new ArtworkImage(
        1,
        faker.image.fashion(),
        faker.hacker.ingverb(),
        320,
        400
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
        component.images[0].altText
        );
      });

      it('should have an img element ', () => {
        component.artistId = 100;
        component.artworkId = 100;
        expect(debug.query(By.css('img')).attributes['alt']).toEqual(
          component.images[0].altText
          );
        });
      });
