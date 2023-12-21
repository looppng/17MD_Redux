import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks.ts";
import React, {useState} from "react";
import {updateAnimal} from "../Reducers/AnimalsSlice.tsx";
import style from './Update.module.css'

const Update = () => {
	const {id} = useParams();
	const animals = useAppSelector((state) => state.animals);
	const existingAnimal = animals.filter(animalId => animalId.id == id);
	const {name, color, image} = existingAnimal[0];

	const navigate = useNavigate()

	const [animalName, setAnimalName] = useState(name)
	const [animalColor, setAnimalColor] = useState(color)
	const [animalImage, setAnimalImage] = useState(image)

	const dispatch = useAppDispatch();

	const handleUpdate = (event: React.FormEvent) => {
		event.preventDefault();
		dispatch(updateAnimal({
			id: id,
			name: animalName,
			color: animalColor,
			image: animalImage
		}))
		navigate('/')
	}


	return (
		<div className="container mt-3">
			<div className={style.wrapper}>
				<h3 className={style.header}>Update animal:</h3>
				<form onSubmit={handleUpdate}>
					<div className={style.item}>
						<label htmlFor='name' className={style.label}>Name:</label>
						<input type='text' name='name' className={style.input} placeholder='Enter animal name...' value={animalName} onChange={e => setAnimalName(e.target.value)}/>
					</div>
					<div className={style.item}>
						<label htmlFor='color' className={style.label}>Color:</label>
						<input type='text' name='color' className={style.input} placeholder='Describe the color...' value={animalColor} onChange={e => setAnimalColor(e.target.value)}/>
					</div>
					<button type='submit' className={style.button}>Update</button>
				</form>
			</div>
		</div>
	)
}

export default Update
