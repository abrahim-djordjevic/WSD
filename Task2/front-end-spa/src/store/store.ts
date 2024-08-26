import { configureStore, Slice } from '@reduxjs/toolkit'
import { RaceSlice } from './slices/RaceSlice';
import { UiSlice } from './slices/UiSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
    reducer: {
        race:RaceSlice.reducer,
        ui: UiSlice.reducer
    }
});

export const useAppDispatch:() => typeof store.dispatch=useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;
export default store;