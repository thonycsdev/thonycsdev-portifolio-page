export default interface IDatabase {
	query(
		stringQuery: string,
		values?: any[]
	): Promise<any[] | undefined>;
}
