import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Horse } from "../../utils/Horse";

interface SliceState  {
    race:string | null;
    horses: Horse[];
}

const initialState: SliceState = {
    race: null,
    horses: [],
}

export const RaceSlice = createSlice({
    name:"race",
    initialState,
    reducers: {
        setRace:(state:SliceState, action:PayloadAction<string>) => {
            state.race = action.payload;
        },
        setHorses:(state:SliceState, action:PayloadAction<Horse[]>) => {
            state.horses = action.payload;
        }
    }
});

export const { setRace, setHorses } = RaceSlice.actions;

export default RaceSlice.reducer;