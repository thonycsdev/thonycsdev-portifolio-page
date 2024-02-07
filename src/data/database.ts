import { Client } from 'pg';

async function query(queryObject:string){
    const client = new Client();
    try {
        await client.connect();
        const response = await client.query(queryObject);
        return response.rows;
    } catch (error) {
        console.error('Error executing query', error);
    }
    finally {
        await client.end();
    }
    return;
}



export default {
    query: query
}