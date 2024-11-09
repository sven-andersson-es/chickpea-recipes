import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Navbar/>
    <main>
      <Sidebar/>
    </main>
    <Footer/>
    </>
  )
}

export default App
