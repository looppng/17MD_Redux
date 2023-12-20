import {configureStore} from "@reduxjs/toolkit";
import animalsSlice from "./Reducers/AnimalsSlice.tsx";


export const store = configureStore({
	reducer: {
		animals: animalsSlice
	}
})


console.log('store', store)


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
