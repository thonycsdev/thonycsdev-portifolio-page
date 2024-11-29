import { BaseModel } from './baseMode';

export interface Experience extends BaseModel {
	started_year: string;
	ended_year: string | null;
}
