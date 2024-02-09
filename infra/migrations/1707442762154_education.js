/* eslint-disable camelcase */

const path = require("path");
const fs = require("fs");

exports.up = async (pgm) => {
  await pgm.createTable("education", {
    id: "id",
    name: { type: "text", notNull: true },
    level: { type: "text", notNull: true },
    description: { type: "text", notNull: true },
    url: { type: "text" },
  });

  const filePath = path.join(
    __dirname,
    "../scripts/seed-education-database.sql"
  );
  const sql = fs.readFileSync(filePath, { encoding: "utf-8" });
  pgm.sql(sql);
};
