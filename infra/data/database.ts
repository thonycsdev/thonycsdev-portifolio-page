import { Client } from "pg";
import IDatabase from "./IDatabase";

export default class PostgresDatabase implements IDatabase {
  async query(stringQuery: string, values?: any[]): Promise<any> {
    const configuration = {
      ssl: process.env.NODE_ENV == "development" ? false : true,
      database: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      host: process.env.POSTGRES_HOST,
      port: process.env.POSTGRES_PORT
        ? parseInt(process.env.POSTGRES_PORT)
        : 5432,
    };
    const client = new Client(configuration);
    try {
      await client.connect();
      const response = await client.query(stringQuery, values);
      return response.rows;
    } catch (error) {
      console.error("Error executing query", error);
    } finally {
      await client.end();
    }
    return;
  }

  async getDatabaseVersion() {
    const databaseVersionResult = (await this.query(
      "SHOW server_version;",
    )) as any[];
    const database_version = this.formatDatabaseVersion(
      databaseVersionResult[0].server_version,
    );
    return database_version;
  }

  private formatDatabaseVersion(version: string) {
    return version.split(" ")[0];
  }
  async getDatabaseMaxConnections() {
    var databaseConnectionsResult = await this.query("SHOW max_connections");
    var max_connections = databaseConnectionsResult![0].max_connections;
    return max_connections;
  }

  async getOpenedConnections() {
    const databaseName = "postgres";
    const activeConnections = (await this.query(
      "SELECT count(*)::int FROM pg_stat_activity WHERE datname=$1;",
      [databaseName],
    )) as any[];

    const activeConnectionsValue = activeConnections[0].count;
    return activeConnectionsValue;
  }
}
