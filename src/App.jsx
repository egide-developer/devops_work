import React from 'react'
import Login from './pages/Login.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About.jsx'
const App = () => {
  return (
    <div>
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/about' element={<About />} />
         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
