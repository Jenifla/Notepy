import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Dasbor from './Page/Dasbor/Dasbor';
import Index from './Page/Index';
import Utama from './Page/Utama';
import Signup from './Page/Signup';
import Login from './Page/Login';
import Dashboard from './Page/Dashboard';
import Foulder from './Page/Foulder';
import DetailFolder from './Page/DetailFolder';
import Favorite from './Page/Favorite';
import EditProfil from './Page/EditProfil';
import Riwayat from './Page/Riwayat';
import Sampah from './Page/Sampah';
import UserList from './crud/UserList';
import TambahData from './crud/TambahData';
import EditData from './crud/EditData';
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
            <Route path="/" element={<Index />} />
            
            <Route path="/dasbor" element={<Dasbor />} />
            <Route path="/SignUp" element={<Signup />} />
            <Route path="/LogIn" element={<Login />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Folder" element={<Foulder />} />
            <Route path="/detail-folder/:folderId" element={<DetailFolder />} /> 
            <Route path="/Favorite" element={<Favorite />} />
            <Route path="/Profile/EditProfil" element={<EditProfil />} />
            <Route path="/Profile/Riwayat" element={<Riwayat />} />
            <Route path="/Profile/Sampah" element={<Sampah />} />
            <Route path="/User" element={<UserList />} />
            <Route path="/TambahData" element={<TambahData />} />
            <Route path="/EditData/:id" element={<EditData />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
