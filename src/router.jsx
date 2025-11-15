import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EntryGate from './pages/EntryGate';
import Home from './pages/Home'
const AppRouter = () => {
  return(
    <Router>
    <Routes>
        <Route path='/' element={<EntryGate/>}/>
        <Route path='/home' element={<Home/>}/>
    </Routes>
    </Router>
  );
}

export default AppRouter
