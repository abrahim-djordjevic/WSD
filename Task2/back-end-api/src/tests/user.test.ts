import { UserController } from "../controllers/userControler";
import { describe, test, expect } from "@jest/globals";
const { createHash } = require('crypto');
const username = 'user1';
const password = '12345678nineten!!';

describe("Validate User Function", () => {
    test('Validate User Function with Correct Data', async () => {
        expect(await new UserController(username, password).login()).toBe(true);
    });

    test('Validate User Function with Incorrect Password', async () => {
        expect(await new UserController(username, `${password}aaaaaaa`).login()).toBe(false);
    });

    test('Validate User Function with Incorrect Username', async () => {
        expect(await new UserController(`test-${username}`, password).login()).toBe(false);
    });
});