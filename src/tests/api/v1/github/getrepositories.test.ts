import orchestrator from '../../../orchestrator';

beforeAll(async () => {
	await orchestrator.waitForAllServices();
});
describe('Get repositories from github', () => {
	test('Should return 200 when GET', async () => {
		const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/github');
		expect(response.status).toBe(200);
	});
});
