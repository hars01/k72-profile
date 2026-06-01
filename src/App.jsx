import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import Skill from './comonents/skills/Skill'
import ContentPage from './comonents/Content/content'
import Connect from './pages/Connect'
import InterestingCards from './pages/InterestingCards'
import ComingSoonPage from './pages/ComingSoonPage'
// import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import Navbar from './comonents/Navigation/Navbar'
import FullScreenNav from './comonents/Navigation/FullScreenNav'
import SmartFooter from './pages/footer'
// import { CanvasTextDemo } from "@/comonents/animation/text";



const App = () => {

  
  const location = useLocation()

  return (
    <div className='text-white'>
      {/* <Link className='text-shadow-cyan-300 mr-2' to='/'>Home</Link>
      <Link className='text-shadow-cyan-300 mr-2' to='/agence'>Agence</Link>
      <Link className='text-shadow-cyan-300 mr-2' to='/projects'>Projects</Link>
 */}
      
      <Navbar />
      <FullScreenNav />
      {/* <CanvasTextDemo /> */}
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/agence' element={<Agence />} /> 
        <Route path='/projects' element={<Projects />} /> 
        <Route path='/skills' element={<Skill />} /> 
        <Route path='/content' element={<ContentPage />} />
        <Route path='/interesting-cards' element={<InterestingCards />} />
        <Route path='/coming-soon' element={<ComingSoonPage />} />
        <Route path='/connect' element={<Connect />} />
      </Routes>
      {location.pathname !== '/' && <SmartFooter />}
    </div>
  )
}

export default App 