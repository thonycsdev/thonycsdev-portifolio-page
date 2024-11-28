import { BaseModel } from './baseMode';

export interface Education extends BaseModel {
	startedYear: string;
	endedYear: string | null;
}
