import { Artwork } from "../artwork/Artwork";
import { Sponsor } from "../sponsor/sponsor";

export class Exhibition {
  id: number;
  name: string;
  description: string;
  sponsor : Sponsor;
  artworks: Array<Artwork> = [];

  constructor(
    id: number,
    name: string,
    description: string,
    sponsor: Sponsor,
    artworks: Array<Artwork>
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.sponsor = sponsor;
    this.artworks = artworks;
  }
 }
