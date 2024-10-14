import { BaseModel } from './baseMode';

export class Education extends BaseModel {
	startedYear: string;
	endedYear: string | null;

	constructor(data: Education) {
		super(data);
		this.startedYear = data.startedYear;
		this.endedYear = data.endedYear;
	}
}
