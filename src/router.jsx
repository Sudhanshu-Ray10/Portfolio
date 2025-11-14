import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EntryGate from './pages/EntryGate';

const AppRouter = () => {
  return(
    <Router>
    <Routes>
        <Route path='/' element={<EntryGate/>}/>
    </Routes>
    </Router>
  );
}

export default AppRouter
