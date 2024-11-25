export default async function fetchFromAPI(key: string) {
	const response = await fetch(key);
	const responseData = await response.json();
	return responseData;
}
