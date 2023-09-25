import './App.css';
import Loader from "./components/loader/Loader.jsx"
import Homepage from './components/Homepage/HomePage.jsx'
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <div className ="App">
      <Router>
        <Routes>
          <Route path='/' element={<Loader />} />
          <Route path='/homepage' element={<Homepage />} />
          </Routes>
     </Router>
    </div>
  );
}

export default App;