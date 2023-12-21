import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../Pages/Home.tsx";
import Create from "../Pages/Create.tsx";
import Update from "../Pages/Update.tsx";


const Router = () => {
	return (
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home/>} />
					<Route path='/create' element={<Create/>} />
					<Route path='/edit/:id' element={<Update/>} />
				</Routes>
			</BrowserRouter>
	)
}

export default Router