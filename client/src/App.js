import { Routes, Route } from "react-router-dom"
import Home from "./view/Home"
import Navbar from "./view/Navbar"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home/> } />
      </Routes>
    </div>
  )
}

export default App