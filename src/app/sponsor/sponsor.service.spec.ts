/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { SponsorService } from './sponsor.service';

describe('Service: Sponsors', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SponsorService]
    });
  });

  it('should ...', inject([SponsorService], (service: SponsorService) => {
    expect(service).toBeTruthy();
  }));
});
