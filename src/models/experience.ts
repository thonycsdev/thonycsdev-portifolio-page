import { BaseModel } from './baseMode';

export class Experience2 extends BaseModel {
	started_year: string;
	ended_year: string | null;

	constructor(data: Experience) {
		super(data);
		this.started_year = data.started_year;
		this.ended_year = data.ended_year;
	}
}

export interface Experience extends BaseModel {
	started_year: string;
	ended_year: string | null;
}
