/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { ExhibitionListComponent } from './exhibition-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ExhibitionService } from '../exhibition.service';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Exhibition } from '../exhibition';
import { Sponsor } from 'src/app/sponsor/sponsor';

describe('ExhibitionListComponent', () => {
  let component: ExhibitionListComponent;
  let fixture: ComponentFixture<ExhibitionListComponent>;
  let debug: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule.withRoutes([])],
      declarations: [ ExhibitionListComponent ],
      providers: [ ExhibitionService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitionListComponent);
    component = fixture.componentInstance;

    component.exhibitions = [
      new Exhibition(
        faker.datatype.number(),
        faker.name.jobTitle(),
        faker.name.jobDescriptor(),
        new Sponsor(
          faker.datatype.number(),
          faker.name.jobTitle(),
          faker.name.jobDescriptor(),
          faker.name.jobType(),
        ),
        [])
    ];

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    //expect
    expect(component).toBeTruthy();
  });

  it('should have an list element', () => {
    expect(debug.query(By.css('.card-title')).nativeElement.textContent).toEqual(
      component.exhibitions[0].name
    );
  });
});
