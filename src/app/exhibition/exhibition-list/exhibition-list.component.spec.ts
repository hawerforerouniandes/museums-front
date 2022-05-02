/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ExhibitionListComponent } from './exhibition-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ExhibitionService } from '../exhibition.service';

describe('ExhibitionListComponent', () => {
  let component: ExhibitionListComponent;
  let fixture: ComponentFixture<ExhibitionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ExhibitionListComponent ],
      providers: [ ExhibitionService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
