/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArtworkService } from './artwork.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ArtworkDetail } from './artwork-detail';
import { ArtworkImage } from '../image/artwork-image';
import faker from '@faker-js/faker';
import { Artist } from '../artist/Artist';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Artwork } from './Artwork';

describe('Service: Artwork', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: ArtworkService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ArtworkService]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new ArtworkService(httpClientSpy);
  });

  it('should ...', inject([ArtworkService], (service: ArtworkService) => {
    expect(service).toBeTruthy();
  }));

  it('#getArtworks should return all artworks', (done: DoneFn) => {
    const expectedArtworks = [
      new Artwork(
        0,
        faker.hacker.noun(),
        2022,
        faker.hacker.phrase(),
        "Painting",
        faker.image.abstract()
      )
    ];
    httpClientSpy.get.and.returnValue(of(expectedArtworks));
    service.getArtworks().subscribe({
      next: artworks => {
        expect(artworks)
        .withContext('Expected artwork')
        .toEqual(expectedArtworks);
        done();
      },
      error: done.fail
    });
  });

  it('#getArtwork by id should return artwork with images', (done: DoneFn) => {
    const testImages: ArtworkImage[] = [
      new ArtworkImage(
        0,
        faker.image.abstract(),
        faker.hacker.ingverb(),
        480,
        640
      )
    ];
    const testArtist: Artist = new Artist(
      0,
      faker.name.firstName(),
      faker.lorem.word(),
      faker.date.past().toDateString(),
      faker.image.avatar()
    );
    const expectedArtwork: ArtworkDetail =  new ArtworkDetail(
      0,
      faker.hacker.noun(),
      2022,
      faker.hacker.phrase(),
      "Painting",
      faker.image.abstract(),
      testImages,
      testArtist
    );

    httpClientSpy.get.and.returnValue(of(expectedArtwork));
    service.getArtwork(100).subscribe({
      next: artworkDetail => {
        expect(artworkDetail)
        .withContext('Expected artwork')
        .toEqual(expectedArtwork);
        done();
      },
      error: done.fail
    });
  });
});
