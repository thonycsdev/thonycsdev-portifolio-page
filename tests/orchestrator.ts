import retry from 'async-retry';
async function waitForAllServices() {
	await waitForWebService();
}

async function waitForWebService() {
	await retry(fetchServerStatus, {
		retries: 100,
		maxTimeout: 1000
	});
}

async function fetchServerStatus() {
	const response = await fetch('http://localhost:3000/api/v1/status');
	if (response.status != 200) {
		const data = await response.json();
		throw new Error(data);
	}
}

const orchestrator = { waitForAllServices };
export default orchestrator;
