import {z, ZodType} from 'zod'
import {AnimalState} from "../Reducers/Data.tsx";
import {zodResolver} from '@hookform/resolvers/zod'

const AnimalsSchema: ZodType<AnimalState> = z.object({

	name: z
			.string().trim()
			.min(2, { message: 'Name must be 2 or more characters'}).max(100),

	color: z
			.string().trim().toLowerCase()
			.min(2, {message: 'Color name must be 2 or more characters long'}),

})

const {register, handleSubmit} = useForm({resolver: zodResolver(AnimalsSchema)})