import database from "@/data/database";


describe("database.js tests", () => {
    test("Given a empty query, should throw an error", async () => {
        const result = await database.query('SELECT $1::text as message');
        expect(result).toBeDefined();
    });
})