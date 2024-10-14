import { BaseModel } from './baseMode';

export class Project extends BaseModel {
	startedYear: string;
	endedYear: string | null;
	technology: string;
	stars: number;
	watchers: number;

	constructor(data: Project) {
		super(data);
		this.startedYear = data.startedYear;
		this.endedYear = data.endedYear;
		this.technology = data.technology;
		this.stars = data.stars;
		this.watchers = data.watchers;
	}
}
