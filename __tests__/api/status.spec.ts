describe("status.js tests", () => {
  test("Should return the status bject when called", async () => {
    var response = await fetch("http://localhost:3000/api/v1/status");
    var status = await response.json();
    expect(status).toBeDefined();
    expect(status.updated_at).toBeDefined();
    expect(status.dependencies.database.version).toBe("16.1");
    expect(status.dependencies.database.max_connections).toBe("100");
    expect(status.dependencies.database.opened_connections).toBeLessThan(3);
  });
});
