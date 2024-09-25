describe("status.js tests", () => {
  test("Should return the status object when called", async () => {
    var response = await fetch("http://localhost:3000/api/v1/status");
    expect(response.status).toBe(200);
  });
});
