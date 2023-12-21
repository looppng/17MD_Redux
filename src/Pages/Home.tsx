import '../App.css'
import {useAppDispatch, useAppSelector} from "../hooks.ts";
import {Link, useNavigate} from "react-router-dom";
import {deleteAnimal, sortAnimals} from "../Reducers/AnimalsSlice.tsx";
import style from './Home.module.css'
import '../i18next/i18n.ts'
import {useTranslation} from "react-i18next";

const Home = () => {
	const animals = useAppSelector((state) => state.animals);

	const dispatch = useAppDispatch();
	const navigate = useNavigate()

	const { t } = useTranslation();

	const handleDelete = (id: number) => {
		dispatch(deleteAnimal({id: id}))
	}

	const handleSortAsc = () => {
		dispatch(sortAnimals('asc'));
	}

	const handleSortDesc = () => {
		dispatch(sortAnimals('desc'))
	}

	return (
			<div className='container mt-3'>
				<h2 className={style.heading}>{t('heading')}</h2>
				<h3>{t('description')}</h3>
				<Link to='/create' className={style.create}>Create</Link>
				<h3 className={style.secondary}>Sort by name:</h3>
				<div className={style.sort}>
					<button onClick={handleSortAsc} className={style.asc}>Ascending</button>
					<button onClick={handleSortDesc} className={style.desc}>Descending</button>
				</div>
				<div className={style.wrapper}>
					{animals.map((animal, index) => (
							<div key={index}>
								<img src={animal.image} alt='animal image'/>
								<p className={style.name}>{animal.name}</p>
								<p className={style.color}>{animal.color}</p>
								<div className={style.action}>
									<button onClick={() => navigate(`/edit/${animal.id}`)} className={style.updateButton}>Edit</button>
									<button onClick={() => handleDelete(animal.id)} className={style.deleteButton}>Delete</button>
								</div>
							</div>
					))}
				</div>
			</div>
	)
}

export default Home
