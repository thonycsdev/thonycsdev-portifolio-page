import { StatusApiResponse } from '@/schemas/statusApiResponse';

describe('status.js tests', () => {
	test('Should return the status object when called', async () => {
		var response = await fetch(
			'http://localhost:3000/api/v1/status'
		);
		expect(response.status).toBe(200);

		const responseBody: StatusApiResponse =
			await response.json();

		expect(responseBody.updated_at).toBeDefined();
		expect(
			new Date(
				responseBody.updated_at
			).getUTCHours()
		).toBe(new Date().getUTCHours());

		expect(
			responseBody.dependencies.database.version.includes(
				'16'
			)
		).toBeTruthy();
		expect(
			+responseBody.dependencies.database
				.max_connections
		).toBeGreaterThanOrEqual(100);
		expect(
			+responseBody.dependencies.database
				.opened_connections
		).toBe(1);
	});
});
