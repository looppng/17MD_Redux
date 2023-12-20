import { createSlice } from "@reduxjs/toolkit";
import {animalList} from "./Data.tsx";


const animalsSlice = createSlice({
	name: 'animals',
	initialState: animalList,
	reducers: {
		animalAdded(state, action) {
			state.push({
				id: action.payload.id,
				name: action.payload.name,
				color: action.payload.color
			})
		}
	}
})

export const {animalAdded} = animalsSlice.actions
export default animalsSlice.reducer