import { Page, TimeoutError } from 'puppeteer';
import { HorseRace } from "../utils/horseRace"
const puppeteer = require('puppeteer');

export class OddsController {
    race:HorseRace;

    constructor() {
        this.race = new HorseRace();
    }


    getRaceData = async(eventUrl: string):Promise<void> => {
        const horseSelector = 'div[data-testid="market-racecard"] div[data-testid="outcome"]';
        const raceSelector = 'a[data-testid="marketLink"] h2 > span'
        const browser = await puppeteer.launch();

        try{
            const page: Page =  await browser.newPage();
    
    
            await page.goto(eventUrl);
            await page.waitForSelector(horseSelector, {timeout: 5000});
    
            this.race.race = await page.$eval(raceSelector, el => el.innerHTML);
        
            this.race.horses = await page.$$eval(horseSelector, (elements) => {
                return elements.map((el) => {
                    return {
                        name: (el.children[2].children[0] as HTMLElement).innerText, 
                        odds: (el.children[3] as HTMLElement).innerText
                        };
                })
            });
        } catch(ex) {
            if (ex instanceof TimeoutError) {
                console.error("ERROR: DATA NOT FOUND ON PROVIDED URL.");
                return;
              }
        } finally {
            await browser.close();
        }
    }
}