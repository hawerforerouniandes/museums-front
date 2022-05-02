/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArtistService } from './artist.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Artist', () => {
  let service: ArtistService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ArtistService]
    });
    service = TestBed.inject(ArtistService);
    //jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
  });

  it('should ...', inject([ArtistService], (service: ArtistService) => {
    expect(service).toBeTruthy();
  }));

  /*it('#getArtists should return artists', (done: DoneFn) => {
    service.getArtists().subscribe({
      next: artists => {
      expect(artists).toBeGreaterThan(0);
      done();
    },
    error: done.fail
    });
  });*/
});
