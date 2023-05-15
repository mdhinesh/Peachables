import './App.css'
import { Route, Routes } from 'react-router-dom'
// import axios from 'axios'

import Home from './pages/Home';
import Profile from './pages/Profile';
import Createquiz from './pages/Createquiz';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Takequiz from './pages/Takequiz';

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
        <Route path='/takequiz/:quizName' element={<Takequiz />} />        
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>

    </div>
  )
}

export default App
