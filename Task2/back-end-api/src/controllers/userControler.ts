import { SqlLiteHandler } from "../utils/sqlLiteHandler";
const { createHash } = require('crypto');
const SALTPHRASE = 'SALTPHRASE';

export class UserController {
    username: string;
    password: string;

    constructor(name: string, password: string){
        this.username = name;
        this.password = password;
    }

    login = async() => {
        const hashedPassword = createHash('sha256').update(`${this.password}${SALTPHRASE}`).digest('base64');
        return await new SqlLiteHandler().checkIfUserExists(this.username, hashedPassword);
    }
}