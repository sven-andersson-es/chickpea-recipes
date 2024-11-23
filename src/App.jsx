import { useState } from 'react'
import recipeArray from "./assets/data/recipes.json";

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import RecipeList from './components/recipeList'
import { Routes, Route } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import DashboardPage from './pages/DashboardPage'
import ItemDetailsPage from './pages/ItemDetailsPage'
import NotFoundPage from './pages/NotFoundPage'


function App() {
  const [recipes, setRecipes] = useState(recipeArray);

	const deleteRecipe = (id) => {
		const updatedArray = [...recipes];
		setRecipes(updatedArray.filter((recipe) => recipe.id !== id));
	};


  return (
    <>
    <Navbar/>
    <main>
      <Sidebar/>
      <div id="main">
      <Routes>
        <Route path='/' element={<DashboardPage recipes={recipes} setRecipes={setRecipes} deleteRecipe={deleteRecipe}/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/recipes/:recipeId' element={<ItemDetailsPage recipes={recipes}/>} />
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
      </div>
    </main>
    <Footer/>
    </>
  )
}

export default App
