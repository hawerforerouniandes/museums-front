import { Sponsor } from "../sponsor/sponsor";

export class Exhibition {
  id: number;
  name: string;
  description: string;
  sponsor : Sponsor;
  constructor(
    id: number,
    name: string,
    description: string,
    sponsor: Sponsor
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.sponsor = sponsor;
  }
 }
