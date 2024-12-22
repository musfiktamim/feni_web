import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './NavFotMore/Nav'
import Foot from './NavFotMore/Foot'
import TourismHomePage from './pages/TourismHomePage'
import Services from './pages/Services'
import ServicesCompo from './pages/ServicesCompo'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/services/:servicesName' element={<ServicesCompo />} />
        <Route path='/tourism' element={<TourismHomePage />} />
        <Route path='/tourism:tourismId' element={<TourismHomePage />} />
      </Routes>
      <Foot />
    </BrowserRouter>
  )
}

export default App