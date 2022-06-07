import { Routes, Route } from "react-router-dom"
import Home from "./view/Home"
import About from "./components/About"
import Navbar from "./view/Navbar"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/Portafolio/" element={ <Home/> } />
        <Route exact path="/tes/test" element={ <About/> } />
      </Routes>
    </div>
  )
}

export default App