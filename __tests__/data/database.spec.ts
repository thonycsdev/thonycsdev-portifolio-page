import database from "../../infra/data/database";

describe("database.js tests", () => {
  test("Should return the max connection of the database", async () => {
    const result = await database.query("SHOW max_connections");
    const max_connections = parseInt(result![0].max_connections);
    expect(result).toBeDefined();
    expect(max_connections).toBe(100);
  });
  test("Should return the current connection of the database", async () => {
    const result = await database.query("SELECT * FROM pg_stat_activity");
    expect(result).toBeDefined();
  });
  test("Should return a empty array when passing a empty value as the query", async () => {
    expect(await database.query("")).toEqual([]);
  });
});
