import database from "@/data/database";


describe("database.js tests", () => {
    test("Given a empty query, should throw an error", async () => {
        const result = await database.query('SHOW max_connections');
        expect(result).toBeDefined();
    });
})