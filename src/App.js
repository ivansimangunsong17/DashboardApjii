import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout'
import Dashboard from './pages/Dashboard'
import Kegiatan from './pages/Kegiatan'
import PagesNotFound from './pages/PagesNotFound'

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}

        <Route element={<Layout />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='kegiatan' element={<Kegiatan />} />
        </Route>
        <Route path='*' element={<PagesNotFound />} />
      </Routes>
    </Router>
  )
}

export default App
