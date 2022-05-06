export class Artwork {
  id: number;
  name: string;
  year: number;
  description: String;
  type: string;

  constructor(
    id: number,
    name: string,
    year: number,
    description: string,
    type: string
  ) {
    this.id = id;
    this.name = name;
    this.year = year;
    this.description = description
    this.type = type
  }
}
