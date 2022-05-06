import { Artwork } from "../artwork/Artwork";
import { Artist } from "./artist";
import { ArtistMovement } from "./artist-movement";

export class ArtistDetail extends Artist{
  movements: ArtistMovement[] = [];
  artworks: Artwork[] = [];
  constructor(
    id: number,
    name: string,
    birthplace: string,
    birthdate: string,
    image: string,
    movements: ArtistMovement[],
    artworks: Artwork[]
  ) {
    super(
      id,
      name,
      birthplace,
      birthdate,
      image
    );
    this.movements = movements;
    this.artworks = artworks;
  }
}
