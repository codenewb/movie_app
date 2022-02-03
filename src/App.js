import React from 'react';
import './App.css'
import {Route,Routes, BrowserRouter, HashRouter} from 'react-router-dom'
import About from './routes/About'
import Home from './routes/Home'
import Navigation from './components/Navigation';

function App(){
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App;
