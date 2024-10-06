import React from 'react'
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Login from "./Component/Login"
import Register from "./Component/Register"
import Home from "./Pages/Home"

const App = () => {
  return (
    <>
    <Router>

      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Home' element={<Home/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
