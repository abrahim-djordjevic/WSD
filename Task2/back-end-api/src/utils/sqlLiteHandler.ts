const Database = require('better-sqlite3');

export class SqlLiteHandler {
    checkIfUserExists = async (username: string, password: string): Promise<boolean> => {
        const db = new Database('../database/database.db', { verbose: console.log });
        var query = `SELECT Username FROM User WHERE Username='${username}' and Password='${password}'`;
        const rows:any[] = await db.prepare(query).all();
        return rows.length > 0;
    }
}