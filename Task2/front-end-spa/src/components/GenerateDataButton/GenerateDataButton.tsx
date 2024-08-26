import { ReactElement, useState } from "react";
import { Client } from "../../client/client";
import store from "../../store/store";
import { setHorses, setRace } from "../../store/slices/RaceSlice";
import { ProgressBar, ThreeDots } from "react-loader-spinner";

export const GenerateDataButton = ():ReactElement => {
    const client = new Client();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const getData = async () => {
        setIsLoading(true);
        client.postOdds().then((response) => {
            store.dispatch(setRace(response.race));
            store.dispatch(setHorses(response.horses));
        }).then(() => {
            setIsLoading(false);
        })
    }

    return(
        <div>
            {isLoading && 
                <ThreeDots
                    visible={true}
                    height="40"
                    width="40"
                    color="#F5F5F5"
                    radius="6"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            }
            {!isLoading &&
                <button
                    className="generate-data-btn" 
                    onClick={async() => {await getData();}}>
                    Get Data
                </button>
            }
        </div>

    );
}