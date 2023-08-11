import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from '../src/pages/Landing'
import Services from './pages/Services'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element = {<Landing />} />
          <Route path='/services' element = {<Services />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
