import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Experience from './Components/Experience'
import Projects from './Components/Projects' 
import Footer from './Components/Footer' 
import ContactPage from './pages/ContactPage'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className='bg-[#171d32] h-auto w-full overflow-hidden'>
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Experience' element={<Experience />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Contact' element={<ContactPage />} />
          <Route path='*' element={<h1 className='text-white'>Page not found</h1>} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App