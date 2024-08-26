import { OddsController } from "../controllers/oddsController";
import { describe, test, expect } from "@jest/globals";

const correctUrl = 'https://m.skybet.com/horse-racing';
const invalidUrl = 'not-a-url';
const incorrectUrl = 'https://m.sssskybet.com/horseaawd-raci';


describe("Scrape Horse Race Data", () => {
    test('Scrape Horse Race Data with Correct URL', async () => {
        const hrc1:OddsController = new OddsController();
        await hrc1.getRaceData(correctUrl);
        expect(hrc1.race.horses.length).toBeGreaterThan(0);
    }, 10000);

    test('Scrape Horse Race Data with Incorrect URL', async () => {
        const hrc1:OddsController = new OddsController();
        await hrc1.getRaceData(incorrectUrl);
        expect(hrc1.race.horses.length).toBe(0);
    }, 10000);

    test('Scrape Horse Race Data with Invalid URL', async () => {
        const hrc1:OddsController = new OddsController();
        await hrc1.getRaceData(invalidUrl);
        expect(hrc1.race.horses.length).toBe(0);
    }, 10000);
});