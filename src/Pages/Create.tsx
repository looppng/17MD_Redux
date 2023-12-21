import React, {useState} from "react";
import {addAnimal} from "../Reducers/AnimalsSlice.tsx";
import {useAppDispatch, useAppSelector} from "../hooks.ts";
import {useNavigate} from "react-router-dom";
import style from './Create.module.css'
import {FieldValues, useForm} from "react-hook-form";


const Create = () => {
	const [name, setName] = useState('')
	const [color, setColor] = useState('')
	const [image, setImage] = useState('https://picsum.photos/199')

	const navigate = useNavigate()

	const animals = useAppSelector((state) => state.animals)
	const dispatch = useAppDispatch();

	const {
		register,
		handleSubmit,
		formState: {
			isSubmitting,
			errors,
		},
		getValues

	} = useForm();

	const onSubmit = (data: FieldValues) => {
		dispatch(addAnimal({id: animals[animals.length - 1].id + 1 , name, color, image}))
		navigate('/')
	}

	return (
			<div className="container mt-3">
				<div className={style.wrapper}>
					<h3 className={style.header}>Add new animal:</h3>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className={style.item}>
							<label htmlFor='name' className={style.label}>Name:</label>
							<input
									{...register('name', {
										required: "Name is required",
										minLength: {
											value: 2,
											message: 'Enter a name with at least 2 characters'
										}
									})}
									type='text'
									name='name'
									className={style.input}
									placeholder='Enter animal name...'
									onChange={(e) => setName(e.target.value)}
							/>
							{errors.name && (
									<div className='container'>{`${errors.name.message}`}</div>
							)}
						</div>
						<div className={style.item}>
							<label htmlFor='color' className={style.label}>Color:</label>
							<input
									{...register('color',{
										required: 'Color is required'
									})}
									type='text'
									name='color'
									className={style.input}
									placeholder='Describe the color...'
									onChange={(e) => setColor(e.target.value)}
							/>
							{errors.color && (
									<div className='container'>{`${errors.color.message}`}</div>
							)}
						</div>
						<button type='submit' disabled={isSubmitting} className={style.button}>Submit</button>
					</form>
				</div>
			</div>
	)
}

export default Create
