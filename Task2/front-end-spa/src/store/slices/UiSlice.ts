import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SliceState  {
    isLoggedIn:boolean | undefined
    user:string | undefined
}

const initialState: SliceState = {
    isLoggedIn:undefined,
    user: undefined
}

export const UiSlice = createSlice({
    name:"ui",
    initialState,
    reducers: {
        setIsLoggedIn:(state:SliceState, action:PayloadAction<boolean>) => {
            state.isLoggedIn = action.payload;
        },
        setUser:(state:SliceState, action:PayloadAction<string | undefined>) => {
            state.user = action.payload;
        }
    }
});

export const { setIsLoggedIn, setUser } = UiSlice.actions;

export default UiSlice.reducer;