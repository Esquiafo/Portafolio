import { Routes, Route } from "react-router-dom"
import Home from "./view/Home"
import Projects from './view/Projects'
import Navbar from "./view/Navbar"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route exact path="/projects" element={ <Projects/> } />
      </Routes>
    </div>
  )
}

export default App