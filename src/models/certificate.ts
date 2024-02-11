import { BaseModel } from "./baseMode";

export class Certificate extends BaseModel {
  hours: number;
  date_started_and_completion: string;

  constructor(data: Certificate) {
    super(data);
    this.hours = data.hours;
    this.date_started_and_completion = data.date_started_and_completion;
  }
}
