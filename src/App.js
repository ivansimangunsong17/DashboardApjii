import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Dashboard from './components/dashboard'
import Hero from './components/hero'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/*' element={<Hero />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
