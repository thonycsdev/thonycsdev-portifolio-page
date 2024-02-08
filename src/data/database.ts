import { Client } from "pg";

async function query(queryObject: { text: string; values?: any[] } | string) {
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

async function getDatabaseVersion() {
  const databaseVersionResult = (await database.query(
    "SHOW server_version;"
  )) as any[];
  const database_version = formatDatabaseVersion(
    databaseVersionResult[0].server_version
  );
  return database_version;
}

function formatDatabaseVersion(version: string) {
  return version.split(" ")[0];
}
async function getDatabaseMaxConnections() {
  var databaseConnectionsResult = await database.query("SHOW max_connections");
  var max_connections = databaseConnectionsResult![0].max_connections;
  return max_connections;
}

async function getOpenedConnections() {
  const databaseName = "postgres";
  const activeConnections = (await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname=$1;",
    values: [databaseName],
  })) as any[];
  const activeConnectionsValue = activeConnections[0].count;
  return activeConnectionsValue;
}

const database = {
  query,
  getDatabaseMaxConnections,
  getDatabaseVersion,
  getOpenedConnections,
};

export default database;
