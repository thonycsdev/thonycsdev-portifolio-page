import { BaseModel } from './baseMode';

export interface Project extends BaseModel {
	startedYear: string;
	endedYear: string | null;
	technology: string;
	stars: number;
	watchers: number;
}
