import { BaseModel } from './baseMode';

export interface Certificate extends BaseModel {
	hours: number;
	date_started_and_completion: string;
}
