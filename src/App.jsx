import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import RecipeList from './components/recipeList'

function App() {

  return (
    <>
    <Navbar/>
    <main>
      <Sidebar/>
      <div id="main">
        <RecipeList />
      </div>
    </main>
    <Footer/>
    </>
  )
}

export default App
