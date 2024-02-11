import { BaseModel } from "./baseMode";

export class Experience extends BaseModel {
  started_year: string;
  ended_year: string | null;

  constructor(data: Experience) {
    super(data);
    this.started_year = data.started_year;
    this.ended_year = data.ended_year;
  }
}
