import { Routes, Route } from "react-router-dom"
import Home from "./view/Home"
import About from './components/About'
import Navbar from "./view/Navbar"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/portafolio" element={ <Home/> } />
      </Routes>
    </div>
  )
}

export default App