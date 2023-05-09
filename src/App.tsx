import { useState } from 'react'
import React from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'

import Home from './pages/Home';
import Profile from './pages/Profile';
import Createquiz from './pages/Createquiz';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  
  const backgroundStyle = {
    backgroundImage: "url('../src/assets/MacBook Pro 16_ BG.png')",
    backgroundRepeat: "repeat-y",
  };
  

  return (
    <div className="App font-sans select-none" style={backgroundStyle}>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/createquiz' element={<Createquiz />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>

    </div>
  )
}

export default App
