import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import RecipeList from './components/recipeList'
import { Routes, Route } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import DashboardPage from './pages/DashboardPage'
import ItemsDetailsPage from './pages/ItemDetailsPage'
import NotFoundPage from './pages/NotFoundPage'

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
        <Route path='/recipes/:recipeId' element={<ItemsDetailsPage/>} />
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
      </div>
    </main>
    <Footer/>
    </>
  )
}

export default App
