/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MuseumDetailComponent } from './museum-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { MuseumService } from '../museum.service';

describe('MuseumDetailComponent', () => {
  let component: MuseumDetailComponent;
  let fixture: ComponentFixture<MuseumDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ MuseumDetailComponent ],
      providers: [ MuseumService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseumDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
