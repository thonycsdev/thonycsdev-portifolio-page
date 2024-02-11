export class BaseModel {
  id: number | null;
  name: string;
  level: string | null;
  description: string | null;
  url: string | null;

  constructor(data: BaseModel) {
    this.id = data.id ? data.id : null;
    this.name = data.name;
    this.level = data.level;
    this.description = data.description;
    this.url = data.url;
  }
}
