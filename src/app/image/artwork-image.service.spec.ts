/* tslint:disable:no-unused-variable */

import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import faker from '@faker-js/faker';
import { of } from 'rxjs';
import { ArtworkImage } from './artwork-image';
import { ArtworkImageService } from './artwork-image.service';

describe('Service: ArtworkImage', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: ArtworkImageService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ArtworkImageService]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new ArtworkImageService(httpClientSpy);
  });

  it('should ...', inject([ArtworkImageService], (service: ArtworkImageService) => {
    expect(service).toBeTruthy();
  }));

  it('#images should return artworks images', (done: DoneFn) => {
    const expectedImages: ArtworkImage[] = [
      {
        id: faker.random.number(),
        source: faker.image.fashion(),
        altText: faker.hacker.ingverb(),
        height: 320,
        width: 400
      }
    ];

    httpClientSpy.get.and.returnValue(of(expectedImages));
    let artworkId: number = 100;
    let artistId: number = 100;
    service.imagesForArtwork(artistId, artworkId).subscribe({
      next: images => {
        expect(images)
        .withContext('expected images')
        .toEqual(expectedImages);
        done();
      },
      error: done.fail
    });
  });
});
