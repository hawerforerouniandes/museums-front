import { Exhibition } from "../exhibition/exhibition";

export class SponsorDetail {
  id: number;
  name: string;
  description: string;
  website: string;
  exhibition: Exhibition;
  constructor(
    id: number,
    name: string,
    description: string,
    website: string,
    exhibition: Exhibition
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.website = website;
    this.exhibition = exhibition;
  }
 }
