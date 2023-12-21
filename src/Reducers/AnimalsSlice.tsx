import { createSlice } from "@reduxjs/toolkit";
import {animalList} from "./Data.tsx";


const animalsSlice = createSlice({
	name: 'animals',
	initialState: animalList,
	reducers: {
		addAnimal(state, action) {
			console.log(action)
			state.push(action.payload)
		},
		updateAnimal(state, action) {
			const {id, name, color, image} = action.payload;
			const updateAnimal = state.find(animal => animal.id == id);
			if (updateAnimal) {
				updateAnimal.name = name;
				updateAnimal.color = color;
				updateAnimal.image = image;
			}
		},
		deleteAnimal(state, action) {
			const {id} = action.payload;
			const updatedAnimal = state.find(animal => animal.id == id);
			if(updatedAnimal) {
				return state.filter(animalId => animalId.id !== id);
			}
		},
		sortAnimals(state, action) {
			const sortOrder = action.payload;
			state.sort((a, b) => {
				const nameA = a.name.toUpperCase();
				const nameB = b.name.toUpperCase();
				if (sortOrder === "asc") {
					return nameA.localeCompare(nameB);
				} else if (sortOrder === "desc") {
					return nameB.localeCompare(nameA);
				}
				return 0;
			});
		}
	}
})

export const {addAnimal, updateAnimal, deleteAnimal, sortAnimals} = animalsSlice.actions
export default animalsSlice.reducer