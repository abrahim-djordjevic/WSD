import { horse } from "./horse";

export class horseRace {
    race: string | undefined;
    horses: Array<horse>;

    constructor(){
        this.race = undefined;
        this.horses = [];
    }
}