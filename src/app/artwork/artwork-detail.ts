import { Artist } from "../artist/Artist";
import { ArtworkImage } from "../image/artwork-image";
import { Artwork } from "./Artwork";

export class ArtworkDetail extends Artwork {
  constructor(
    id: number,
    name: string,
    year: number,
    description: string,
    type: string,
    mainImage: string,
    public images: ArtworkImage[],
    public artist: Artist
    ) {
      super(
        id,
        name,
        year,
        description,
        type,
        mainImage
      );
      }
    }
