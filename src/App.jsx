import { useState } from 'react'
import './App.css'
import Pages from './pages/Pages'
import {Link,BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import About from './pages/About'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <Link to="/">pages</Link>
        <Link to="/about">about</Link>
        </header>
        <Routes>
          <Route path='/'  element={<Pages></Pages>} />
          <Route path='/about' element={<About></About>} />
        </Routes>
     
      </div>
     
    </Router>
  )
}

export default App
