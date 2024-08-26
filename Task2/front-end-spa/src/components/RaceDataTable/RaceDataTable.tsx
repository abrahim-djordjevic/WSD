import { ReactElement, useEffect } from "react";
import { useAppSelector } from "../../store/store";

export const RaceDataTable = ():ReactElement => {
    const race = useAppSelector((state) => state.race.race);
    const horses = useAppSelector((state) => state.race.horses);
    const settings = require("../../app-settings.json");

    if(horses.length === 0) return <div></div>

    return(
         <div className="race-data-content">
            <div>
                Details for {race} from <a href={settings.url}>{settings.url}</a>
            </div>
            <div className="horse-race-table-container">
                <table className="horse-race-table">
                    <thead>
                        <tr>
                            <th>Horse</th>
                            <th>Odds</th>
                        </tr>
                    </thead>
                    <tbody>
                        {horses.map((horse) => {
                            return(
                                <tr>
                                    <td>{horse.name}</td>
                                    <td>{horse.odds}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}