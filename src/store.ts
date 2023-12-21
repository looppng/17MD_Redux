import {configureStore} from "@reduxjs/toolkit";
import animalsSlice from "./Reducers/AnimalsSlice.tsx";
import {animalList} from "./Reducers/Data.tsx";

const initialState = localStorage.getItem('animalsList') ? JSON.parse(localStorage.getItem('animalsList')!) : animalList;

export const store = configureStore({
	reducer: {
		animals: animalsSlice
	},
	preloadedState: {
		animals: initialState
	}
})

store.subscribe(() => {
	const state = store.getState();
	localStorage.setItem('animalsList', JSON.stringify(state.animals))
})


console.log('store', store)


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
