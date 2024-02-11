/* eslint-disable camelcase */

const path = require("path");
const fs = require("fs");

exports.up = async (pgm) => {
  await pgm.createTable("experiences", {
    id: "id",
    name: { type: "text", notNull: true },
    level: { type: "text", notNull: true },
    description: { type: "text", notNull: true },
    started_year: { type: "text", notNull: true },
    ended_year: { type: "text" },
  });

  const filePath = path.join(
    __dirname,
    "../scripts/seed-experiences-database.sql"
  );
  const sql = fs.readFileSync(filePath, { encoding: "utf-8" });
  pgm.sql(sql);
};
