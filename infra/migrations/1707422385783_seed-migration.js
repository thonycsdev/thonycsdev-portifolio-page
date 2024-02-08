/* eslint-disable camelcase */

const path = require("path");
const fs = require("fs");

exports.shorthands = undefined;

exports.up = (pgm) => {
  const filePath = path.join(__dirname, "../scripts/seed-database.sql");
  const sql = fs.readFileSync(filePath, { encoding: "utf-8" });
  console.log(sql);
  pgm.sql(sql);
};

exports.down = (pgm) => {};
