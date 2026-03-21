import React, { useState } from 'react'

import './App.css'
import NavBar from './components/navigation/nav-bar/NavBar'
import HomePage from './pages/home/HomePage'

function App() {

  return (
    <div>
      <NavBar />
      <HomePage />
    </div>
  )
}

export default App
