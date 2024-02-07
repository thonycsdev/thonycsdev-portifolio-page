import { Client } from "pg";

async function query(queryObject: string) {
  const client = new Client({
    database: "postgres",
    user: "postgres",
    password: "postgres",
    host: "localhost",
    port: 5432,
  });
  try {
    await client.connect();
    const response = await client.query(queryObject);
    return response.rows;
  } catch (error) {
    console.error("Error executing query", error);
  } finally {
    await client.end();
  }
  return;
}

const database = {
  query,
};

export default database;
