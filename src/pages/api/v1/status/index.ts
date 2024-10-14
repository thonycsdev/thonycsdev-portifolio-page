// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {
	NextApiRequest,
	NextApiResponse
} from 'next';
import PostgresDatabase from '../../../../../infra/data/database';
export default async function handler(
	req: NextApiRequest,
	response: NextApiResponse
) {
	const updatedAt = new Date().toISOString();
	var database = new PostgresDatabase();
	const database_version =
		await database.getDatabaseVersion();
	const max_connections =
		await database.getDatabaseMaxConnections();
	const opened_connections =
		await database.getOpenedConnections();

	return response.status(200).json({
		updated_at: updatedAt,
		dependencies: {
			database: {
				version: database_version,
				max_connections: max_connections,
				opened_connections: opened_connections
			},
			webserver: {}
		}
	});
}
