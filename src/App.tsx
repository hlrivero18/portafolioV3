import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/home'
import About from './routes/aboutme/about'
import Project from './routes/projects/projects'
import Certificaciones from './routes/Certificaciones/certificaciones'
import Experience from './routes/experience/experience'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/aboutme' element={<About/>}/>
      <Route path='/proyect' element={<Project/>}/>
      <Route path='/certifications' element={<Certificaciones/>}/>
      <Route path='/experience' element={<Experience/>}/>
    </Routes>
  )
}

export default App
