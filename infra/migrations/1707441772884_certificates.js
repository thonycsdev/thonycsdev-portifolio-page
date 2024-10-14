/* eslint-disable camelcase */

const path = require('path');
const fs = require('fs');

exports.up = async (pgm) => {
	await pgm.createTable('certificates', {
		id: 'id',
		name: { type: 'text', notNull: true },
		hours: { type: 'float', notNull: true },
		date_started_and_completion: {
			type: 'text',
			notNull: true
		},
		url: { type: 'text' }
	});

	const filePath = path.join(
		__dirname,
		'../scripts/seed-certificates-database.sql'
	);
	const sql = fs.readFileSync(filePath, {
		encoding: 'utf-8'
	});
	pgm.sql(sql);
};
