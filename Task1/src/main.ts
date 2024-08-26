import { horseRaceController } from "./controllers/horseRaceController";
const URL = require("url").URL;

const stringIsAValidUrl = (s:string) => {
    try {
      new URL(s);
      return true;
    } catch (err) {
      return false;
    }
  };

const main = () => {
    if(process.argv.length < 3) {
        console.error("ERROR: NO URL PROVIDED");
        return;
    }
    
    const controller = new horseRaceController();
    const url = process.argv[2]
    if(stringIsAValidUrl(url)){
        controller.getRaceData(url).then(() => {
            if(controller.race.race !== undefined) console.log(controller.race);
        });
    } else {
        console.error("ERROR: URL PROVIDED IS NOT VALID");
    }
};

main();