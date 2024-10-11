exports.up = (pgm) => {
	pgm.createTable('skills', {
		id: 'id',
		name: { type: 'text', notNull: true },
		level: { type: 'text', notNull: true },
		description: { type: 'text', notNull: false }
	});
};
