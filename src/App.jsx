import { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import RecipeList from './components/recipeList'
import { Routes, Route } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import DashboardPage from './pages/DashboardPage'
import ItemDetailsPage from './pages/ItemDetailsPage'
import NotFoundPage from './pages/NotFoundPage'
import recipesArray from "./assets/data/recipes.json"


function App() {

  return (
    <>
    <Navbar/>
    <main>
      <Sidebar/>
      <div id="main">
      <Routes>
        <Route path='/' element={<DashboardPage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/recipes/:recipeId' element={<ItemDetailsPage recipes={recipesArray}/>} />
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
      </div>
    </main>
    <Footer/>
    </>
  )
}

export default App
