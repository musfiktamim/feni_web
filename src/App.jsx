import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './NavFotMore/Nav'
import Foot from './NavFotMore/Foot'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Foot />
    </BrowserRouter>
  )
}

export default App