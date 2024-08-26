import { Horse } from "./horse";

export class HorseRace {
    race: string | undefined;
    horses: Array<Horse>;

    constructor(){
        this.race = undefined;
        this.horses = [];
    }
}