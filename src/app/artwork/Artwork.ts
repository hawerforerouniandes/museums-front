export class Artwork {
  name: string;
  year: number;
  description: String;
  type: number;

  constructor(
    name: string,
    year: number,
    description: string,
    type: number
  ) {
    this.name = name;
    this.year = year;
    this.description = description
    this.type = type
  }
}
