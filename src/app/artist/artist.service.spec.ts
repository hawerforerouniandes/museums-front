/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArtistService } from './artist.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { ArtistDetail } from './artist-detail';

describe('Service: Artist', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: ArtistService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ArtistService]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new ArtistService(httpClientSpy);
  });

  it('should ...', inject([ArtistService], (service: ArtistService) => {
    expect(service).toBeTruthy();
  }));

  it('#getArtists should return artist with artworks and movements', (done: DoneFn) => {
    const expectedArtists: ArtistDetail[] = [
      {
        id: 100,
        name: "Brett Whiteley",
        birthplace: "Sydney, New South Wales, Australia",
        birthdate: "1939-04-07T00:00:00.000Z",
        image: "https://content.api.news/v3/images/bin/6e366e88e44b0777b55a87ea6f2ffbd3",
        movements: [
          {
            id: 100,
            name: "Avant-garde",
            description: `The avant-garde is a person or work that is experimental, radical, or unorthodox with respect to art, culture, or society. It is frequently characterized by aesthetic innovation and initial unacceptability.
            The avant-garde pushes the boundaries of what is accepted as the norm or the status quo, primarily in the cultural realm. The avant-garde is considered by some to be a hallmark of modernism. Many artists have aligned themselves with the avant-garde movement, and still continue to do so, tracing their history from Dada through the Situationists and to postmodern artists such as the Language poets around 1981.
            The avant-garde also promotes radical social reforms. This meaning was evoked by the Saint Simonian Olinde Rodrigues in his essay, "L'artiste, le savant et l'industriel" ("The artist, the scientist and the industrialist", 1825). This essay contains the first use of "avant-garde" in its now customary sense; there, Rodrigues called on artists to "serve as [the people's] avant-garde", insisting that "the power of the arts is indeed the most immediate and fastest way" to social, political and economic reform.`,
            countryOfOrigin: "France",
            activeYears: "From the latter half of the 19th century to this day"
          }
        ],
        artworks: [
          {
            id: 101,
            name: "Self portrait in the studio",
            year: 1976,
            description: "Similar to Brett Whiteley's other major paintings of this period, 'Self-portrait in the studio' exudes a sense of sumptuous living and the liquid presence of the harbour through what he called 'the ecstasy-like effect of Ultramarine blue'. Whiteley's tiny mirror self-portrait also reflects the influence of Eastern art in his portrayal of man as merely part of a larger landscape.",
            type: "Painting",
            mainImage: "https://www.bendigoregion.com.au/sites/default/files/2021-05/brett_whiteley_greg_self.jpg"
          },
          {
            id: 100,
            name: "Dogs",
            year: 1975,
            description: "Brett Whiteley felt deeply connected to animals since childhood. In fact, between 1965 and 1988 he staged four exhibitions whose predominant or exclusive subject was animals that he had observed in zoos, domestic environments and in nature.",
            type: "Painting",
            mainImage: "https://www.bendigoregion.com.au/sites/default/files/2021-05/brett_whiteley_greg_self.jpg"
          }
        ]
      }
    ];

    httpClientSpy.get.and.returnValue(of(expectedArtists));

    service.getArtists().subscribe({
      next: artists => {
        expect(artists)
        .withContext('expected artists')
        .toEqual(expectedArtists);
        done();
      },
      error: done.fail
    });
  });
});
