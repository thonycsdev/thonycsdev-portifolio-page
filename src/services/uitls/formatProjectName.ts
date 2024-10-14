export default function formatProjectName(name: string) {
	return name
		.replace(/[^a-zA-Z0-9]/g, '-')
		.toLowerCase()
		.split('-')
		.filter((item) => item !== '')
		.map((char) => char.charAt(0).toUpperCase() + char.slice(1))
		.join(' ');
}
