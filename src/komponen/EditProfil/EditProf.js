import React, { useState, useEffect } from 'react';
import "./EditProf.css";
import image1 from "../../aset/User.png";
import defaultAvatar from '../../aset/avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from "@fortawesome/free-solid-svg-icons";


const EditProf = () => {
  const [foto_profil, setFoto] = useState("");
  const [password, setPassword] = useState("");
 const [profile, setProfile] = useState({
    username: '',
    email: '',
    lokasi: '',
    status: '',
    no_tlpn: '',
    password: '',
    foto_profil: ''
 });

 useEffect(() => {
  // Ambil data dari backend saat komponen dimuat
  fetchDataUser();
}, []);

 const fetchDataUser = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch('http://localhost:8080/usersdata', {
      method: 'GET',  
    headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      setProfile(data);
      console.log('Data user:', data);
    } else {
      console.error('Gagal mengambil data profil');
    }
  } catch (error) {
    console.error('Terjadi kesalahan', error);
  }
};

 const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
    if (name === 'password') {
      setPassword(value);
    }
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile berhasil diperbarui', profile);
 };

 const handleFileChange = (e) => {
  setFoto(e.target.files[0]);
};

const fotoProfil = foto_profil
? URL.createObjectURL(foto_profil)
: profile.foto_profil
? `http://localhost:8080/uploads/${profile.foto_profil}`
: defaultAvatar;


//  const renderProfileImage = () => {
//   if (profile.foto_profil) {
//     // Jika ada foto profil di database
//     return <div className="image-container"><img className="ellipse" alt="Ellipse" src={`http://localhost:8080/uploads/${profile.foto_profil}`} /></div>;
//   } else {
//     // Jika tidak ada foto profil di database, tampilkan avatar default
//     return <div className="image-container"><img className="ellipse" alt="Avatar" src={defaultAvatar}/> </div>;
//   }
// };

const handleImageChange = (e) => {
  const file = e.target.files[0]; // Dapatkan file yang dipilih oleh pengguna
  // Lakukan operasi yang diperlukan dengan file yang dipilih, seperti unggah ke server, dll.
  // Misalnya, Anda dapat menggunakan FileReader untuk membaca file dan menampilkan pratinjau di halaman.
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      setFoto(reader.result);
      setProfile({ ...profile, foto_profil: reader.result });
    };
    reader.readAsDataURL(file);
  }
};

const updateProfile = async (e) => {
  e.preventDefault();
  console.log('Profile yang akan dikirim:', profile);
  try {
    const token = localStorage.getItem('token');
    const formData = new FormData();

    formData.append('username', profile.username);
    formData.append('email', profile.email);
    formData.append('password', password);
    formData.append('status', profile.status);
    formData.append('lokasi', profile.lokasi);
    formData.append('no_tlpn', profile.no_tlpn);
    // Periksa apakah ada perubahan pada foto_profil
    if (foto_profil && !(foto_profil instanceof String)) {
      formData.append('foto_profil', foto_profil);
    }

    const response = await fetch('http://localhost:8080/editprofil', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Profil berhasil diperbarui:', data);
    } else {
      const errorData = await response.json(); // Ambil pesan kesalahan dari server
      console.error('Gagal memperbarui profil:', errorData);
    }
  } catch (error) {
    console.error('Terjadi kesalahan', error);
  }
};


 return (
    <div className="profile">
      {profile && (
        <div>
          <div className="frame-2">
            <div className="title-prof">Edit Profile</div>
          </div>
          
          {/* <div className="image-container"><img className="ellipse" alt="Ellipse" src={
              profile.foto_profil != null
                ? `http://localhost:8080/uploads/${profile.foto_profil}`
                : "../../aset/avatar.png"
            } /></div>; */}
            {/* {renderProfileImage()} */}
            <div className="image-container"><img className="ellipse" alt="Ellipse" src={fotoProfil} /></div>
          <label htmlFor="file-input" className="group">
            <FontAwesomeIcon className="pen" alt="Pen" icon={faPen} />
          </label>
          <input
            id="file-input"
            type="file"
            name="foto_profil"
            accept="image/*" // Hanya menerima file gambar
            style={{ display: 'none' }}
            defaultValue={foto_profil ? "" : profile.foto_profil}
            onChange={handleFileChange}
          />
        
          <div className='edit-form'>
            <form onSubmit={updateProfile}>
              <div className='group-username'>
                <label className='label-username'> 
                  Username</label>
                <input className='input-username'
                  type="text"
                  name="username"
                  placeholder='Username'
                  value={profile.username}
                  onChange={handleChange}
                />
              </div>
              <div className='group-email'>
                <label className='label-email'>
                  Email</label>
                <input className='input-email'
                  type="email"
                  name="email"
                  placeholder='Email'
                  value={profile.email}
                  onChange={handleChange}
                />
              </div>
              <div className='group-lokasi'>
                <label className='label-lokasi'>
                  Lokasi</label>
                <input className='input-lokasi'
                  type="text"
                  name="lokasi"
                  placeholder='Lokasi'
                  value={profile.lokasi}
                  onChange={handleChange}
                />
              </div>
              <div className='group-status'>
                <label className='label-status'>
                  Status</label>
                <input className='input-status'
                  type="text"
                  name="status"
                  placeholder='Status'
                  value={profile.status}
                  onChange={handleChange}
                />
              </div>
              <div className='group-phone'>
                <label className='label-phone'>
                  Telepon</label>
                <input className='input-phone'
                  type="text"
                  name="no_tlpn"
                  placeholder='No Telephone'
                  value={profile.no_tlpn}
                  onChange={handleChange}
                />
              </div>
              <div className='group-password'>
                <label className='label-password'>
                  Password</label>
                <input className='input-password'
                  type="password"
                  name="password"
                  placeholder='Masukan Password Baru'
                  value={password}
                  onChange={handleChange}
                />
              </div>
              <button className="btn-sv" type="submit">Save</button>
            </form>
          </div>
        </div>
      )}
    </div>
 );
};

export default EditProf;
