import { Artwork } from "../artwork/Artwork";
import { Exhibition } from "./exhibition";

export class ExhibitionDetail extends Exhibition {
  constructor(
    id: number,
    name: string,
    description: string,
    public artworks: Artwork[]
  ) {
    super(id, name, description);
    this.artworks = artworks;
  }
}
