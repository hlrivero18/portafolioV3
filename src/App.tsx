import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/home'
import About from './routes/aboutme/about'
import Project from './routes/projects/projects'
import Certificaciones from './routes/Certificaciones/certificaciones'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/aboutme' element={<About/>}/>
      <Route path='/proyect' element={<Project/>}/>
      <Route path='/certifications' element={<Certificaciones/>}/>
    </Routes>
  )
}

export default App
