import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../komponen/Dashboard/Dash.css'
import WebNavbar from '../komponen/NavBarD/WebNavbar'
import image1 from "../aset/User.png";
import Cards from '../komponen/Cards/Cards'
import defaultAvatar from '../aset/avatar.png';

const Dashboard = () => {
  const [user, setUser] = useState({
    foto_profil: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8080/usersdata', {
          
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.status === 200) {
          const data = response.data; // Mengakses data dari respons Axios
          setUser(data);
          console.log('Data user:', data);
        } else {
          console.error('Gagal mendapatkan data user');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        console.log("eror fashing:", error)
      }
    };

    fetchData();
  }, []);

  const fotoProfil = user.foto_profil
  ? `http://localhost:8080/uploads/${user.foto_profil}`
  : defaultAvatar;

  return (
    <div>
      <WebNavbar />
      <div className="home" style={{ '--tinggi-catatan': '100px' }}>
      <div className="home-me">
        <div className="konten-home">
            <div className="topsee">
            <div className="prof">
            <div className="image-container"><img className="user-img" alt="User" src={fotoProfil} /></div>
              <div className="group-profile">
              {user && ( <>
                <div className="text-user">{user.username}</div>
                <div className="text-email-user">{user.email}</div>
              </>
              )}
              </div>
            </div>
            </div>
            <div className="barr">
            <div className="text-wrapper-4">Dashboard</div>
          </div>
          <Cards  showOnlyFavorites={false}/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Dashboard
