import { Routes, Route } from "react-router-dom"
import Home from "./view/Home"
import Projects from './view/Projects'
import Navbar from "./view/Navbar"
import Css from "./view/Css"
import Html from "./view/Html"
import Javascript from "./view/Javascript"
import Node from "./view/Node"
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route exact path="/projects" element={ <Projects/> } />
        <Route exact path="/projects/javascript" element={ <Javascript/> } />
        <Route exact path="/projects/css" element={ <Css/> } />
        <Route exact path="/projects/html" element={ <Html/> } />
        <Route exact path="/projects/node" element={ <Node/> } />
      </Routes>
    </div>
  )
}

export default App