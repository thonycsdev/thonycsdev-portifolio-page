import orchestrator from '../../../orchestrator';

beforeAll(async () => {
	await orchestrator.waitForAllServices();
});
describe('Professional endpoint tests', () => {
	test('Should return 200 and data as a array', async () => {
		const response = await fetch('http://localhost:3000/api/v1/professional');

		expect(response.status).toBe(200);
		const responseData = await response.json();
		expect(Array.isArray(responseData)).toBeTruthy();
	});
});
