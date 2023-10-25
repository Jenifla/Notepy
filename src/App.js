import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Dashboard from './komponen/Dashboard';
import SignUp from './signup/SignUp';
import LogIn from './login/LogIn';
import Home from './komponen/Home';
import SplashScreen from './SplashScreen/SplashScreen';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Ganti 3000 dengan waktu yang Anda inginkan (dalam milidetik)
  }, []);

  return (
    <div className="App">
      {showSplash ? (
        <SplashScreen />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/Home" element={<Home />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
