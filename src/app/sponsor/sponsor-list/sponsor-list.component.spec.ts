/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { SponsorListComponent } from './sponsor-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SponsorService } from '../sponsor.service';
import { Sponsor } from '../sponsor';
import { Exhibition } from 'src/app/exhibition/exhibition';

describe('SponsorListComponent', () => {
  let component: SponsorListComponent;
  let fixture: ComponentFixture<SponsorListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ SponsorListComponent ],
      providers: [ SponsorService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorListComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an table element ', () => {
    expect(debug.query(By.css('table')).attributes['alt']).toEqual(
      "Table sponsors"
    );
  });
});
