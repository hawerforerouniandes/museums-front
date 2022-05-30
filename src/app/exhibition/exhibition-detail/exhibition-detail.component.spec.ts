/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ExhibitionDetailComponent } from './exhibition-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { ExhibitionService } from '../exhibition.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { compileClassMetadata } from '@angular/compiler';
import { Exhibition } from '../exhibition';
import faker from '@faker-js/faker';
import { Sponsor } from 'src/app/sponsor/sponsor';

describe('ExhibitionDetailComponent', () => {
  let component: ExhibitionDetailComponent;
  let fixture: ComponentFixture<ExhibitionDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, ToastrModule.forRoot(), HttpClientModule],
      declarations: [ ExhibitionDetailComponent ],
      providers: [ ExhibitionService ]
    })

    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitionDetailComponent);
    component = fixture.componentInstance;

    component.artworks = [];

    component.exhibition = new Exhibition(
      faker.datatype.number(),
      faker.name.jobTitle(),
      faker.name.jobDescriptor(),
      new Sponsor(
        faker.datatype.number(),
        faker.name.jobTitle(),
        faker.name.jobDescriptor(),
        faker.name.jobType(),
      ),
      component.artworks
    );



    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an titulo element ', () => {
    expect(debug.query(By.css('.h3.p-3')).nativeElement.textContent).toEqual(
      component.exhibition.name
    );
  });

  it('should have an description element ', () => {
    expect(debug.query(By.css('dd')).nativeElement.textContent).toEqual(
      component.exhibition.description
    );
  });

});
