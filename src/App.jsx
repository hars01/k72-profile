import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <div className='text-white'>
      {/* <Link className='text-shadow-cyan-300 mr-2' to='/'>Home</Link>
      <Link className='text-shadow-cyan-300 mr-2' to='/agence'>Agence</Link>
      <Link className='text-shadow-cyan-300 mr-2' to='/projects'>Projects</Link>
 */}

      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/agence' element={<Agence />} /> 
        <Route path='/projects' element={<Projects />} /> 
      </Routes>
    </div>
  )
}

export default App 