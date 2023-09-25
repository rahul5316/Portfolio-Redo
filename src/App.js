import Loader from "./components/loader/Loader.jsx";
import Homepage from './components/Homepage/HomePage.jsx';
import Hello from './components/Hello/Hello.jsx';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Set the loader to be displayed upon refresh
    window.addEventListener("beforeunload", () => setShowLoader(true));
    return () => window.removeEventListener("beforeunload", () => setShowLoader(true));
  }, []);

  return (
    <Router>
      <div className="App">
        {showLoader ? (
          <Loader onLoaded={() => setShowLoader(false)} />
        ) : (
          <Routes>
            <Route path='/hello' element={<Hello />} />
            <Route path='/homepage' element={<Homepage />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
