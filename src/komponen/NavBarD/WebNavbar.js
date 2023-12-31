import React, { useState, useEffect } from "react";
import "./WebNavbar.css";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFolder as fasFolder,
  faHeart as fasHeart,
  faUser as fasUser,
  faSignOutAlt, faBars, faXmark
} from "@fortawesome/free-solid-svg-icons";
import {
  faFolder as farFolder,
  faHeart as farHeart,
  faUser as farUser
} from "@fortawesome/free-regular-svg-icons";
import { Dropdown, Modal, Button, Form } from 'react-bootstrap'; // Pastikan Bootstrap telah diinstal

import image1 from "../../aset/logo1.png";
import image3 from "../../aset/new.png";
import image4 from "../../aset/home.png";
import image5 from "../../aset/home-1.png";


const WebNavbar = () => {
  
  const handleCreateFolder = async () => {
    try {
      const token = localStorage.getItem('token');
      const folderName = nama_folder.trim(); // Menghapus spasi kosong di awal dan akhir
  
      if (!folderName) {
        console.error('Nama folder diperlukan!');
        return;
      }
  
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      };
  
      const folderData = {
        nama_folder: folderName,
      };
  
      const response = await axios.post('http://localhost:8080/folder/new', folderData, config);
  
      if (response.status === 201) {
        console.log('Folder berhasil dibuat!');
        handleHideFolderModal();
        window.location.reload();
      } else {
        console.error('Gagal membuat folder!');
      }
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
    }
  };

  const handleCreateNote = async () => {
    try {
      const token = localStorage.getItem('token');
      const noteTitle = judul.trim(); // Ganti dengan judul catatan yang diinginkan
      const noteContent = isi.trim(); // Ambil isi catatan dari state atau sesuaikan dengan kebutuhan aplikasi
  
      if (!noteTitle || !noteContent) {
        console.error('Judul dan isi catatan diperlukan!');
        return;
      }
  
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      };
  
      const noteData = {
        judul: noteTitle,
        isi: noteContent,
      };
  
      const response = await axios.post('http://localhost:8080/catatan/new', noteData, config);
  
      if (response.status === 201) {
        console.log('Catatan berhasil dibuat!');
        handleHideNoteModal();
        window.location.reload();
      } else {
        console.error('Gagal membuat catatan!');
      }
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
    }
  };



  
  
  


  const [description, setDescription] = useState('');
  const [noteTitle, setnoteTitle] = useState('');

  const [showNoteModal, setShowNoteModal] = useState(false);
  const [showTodoModal, setShowTodoModal] = useState(false);
  const [showFolderModal, setShowFolderModal] = useState(false);

  const handleShowNoteModal = () => setShowNoteModal(true);
  const handleHideNoteModal = () => setShowNoteModal(false);

  const handleShowTodoModal = () => setShowTodoModal(true);
  const handleHideTodoModal = () => setShowTodoModal(false);

  const handleShowFolderModal = () => setShowFolderModal(true);
  const handleHideFolderModal = () => setShowFolderModal(false);

  const [showModal, setShowModal] = useState(false);
  const [activePage, setActivePage] = useState('');
  const [expanded, setExpaned] = useState(true)
  const [nama_folder, setFolderName] = useState('');
  const [judul, setJudul] = useState('');
  const [isi, setIsi] = useState('');

  const handleFolderNameChange = (e) => {
    setFolderName(e.target.value);
  };

  const handleJudulCatatan = (e) => {
    setJudul(e.target.value);
   
  };
  const handleIsiCatatan = (e) => {
  
    setIsi(e.target.value);
  };

  








  const [judul_todolist, setJudulTodolist] = useState('');
  const [tugas, setTugas] = useState([]);
  const [newTugas, setNewTugas] = useState('');

  const handleJudulTodolist = (e) => {
    setJudulTodolist(e.target.value);
   
  };

  const handleTaskChange = (e) => {
    setNewTugas(e.target.value);
  };

  const addTugas = () => {
    setTugas([...tugas, { tugas: newTugas, status: false }]);
    setNewTugas('');
  };

  const handleCheckboxChange = (index) => {
    const updatedTugas = [...tugas];
    updatedTugas[index].status = !updatedTugas[index].status;
    setTugas(updatedTugas);
  };

  const handleDeleteTask = (index) => {
    const updatedTugas = [...tugas];
    updatedTugas.splice(index, 1);
    setTugas(updatedTugas);
  };

  const handleCreateTodolist = async () => {
    try {
      const token = localStorage.getItem('token');
      
      
  
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      };
  
      const todoListData = {
        judul_todolist: judul_todolist,
        // isi: noteContent,
        tugas: tugas, // Menambahkan data tasks ke payload
      };
  
      const response = await axios.post('http://localhost:8080/todolist/new', todoListData, config);
  
      if (response.status === 201) {
        console.log('Catatan berhasil dibuat!');
        handleHideTodoModal();
        window.location.reload();
      } else {
        console.error('Gagal membuat catatan!');
      }
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
    }
  };






  

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/Folder' ||
        path === '/detail-folder/:id') {
      setActivePage('folder');
    } else if (path === '/Dashboard') {
      setActivePage('home');
    } else if (path === '/Favorite') {
      setActivePage('favorite');
    } else if (
      path === '/Profile/EditProfil' ||
      path === '/Profile/Riwayat' ||
      path === '/Profile/Sampah'
    ) {
      setActivePage('profile');
    }
  }, []);

  const handlePageChange = (page) => {
    setActivePage(page);
    switch (page) {
      case "home":
        window.location.href = '/Dashboard';
        break;
      case "folder":
        window.location.href = '/Folder';
        break;
      case "favorite":
        window.location.href = '/Favorite';
        break;
      case "profile/edit":
        window.location.href = '/Profile/EditProfil';
        break;
      case "profile/history":
        window.location.href = '/Profile/Riwayat';
        break;
      case "profile/trash":
        window.location.href = '/Profile/Sampah';
        break;
        case "new/note/basic":
          handleShowNoteModal();
          break;
        case "new/note/todo":
          handleShowTodoModal();
          break;
        case "new/folder":
          handleShowFolderModal();
          break;
      default:
        break;
    }
  };

  const getIcon = (page) => {
    switch (page) {
      case "folder":
        return activePage === "folder" ? fasFolder : farFolder;
      case "home":
        return activePage === "home" ? image5 : image4;
      case "favorite":
        return activePage === "favorite" ? fasHeart : farHeart;
      case "profile":
        return activePage === "profile" ? fasUser : farUser;
      default:
        return null;
    }
  };

  return (
    <>
    <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <FontAwesomeIcon>{faBars}</FontAwesomeIcon>
      </div>
    <div className="web-navbar">
    <img className="img" alt="Ellipse" src={image1} />
    <div className="make-new">
      <Dropdown>
        <Dropdown.Toggle variant="transparent" id="dropdown-make-new">
          <img className="bundar" alt="Ellipse" src={image3} />
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-make-new-menu">
              <Dropdown.Item style={{ backgroundColor: "#fffff" }} onClick={() => handlePageChange("new/note/basic")}>
                Catatan Biasa
              </Dropdown.Item>
              <Dropdown.Item style={{ backgroundColor: "#fffff" }} onClick={() => handlePageChange("new/note/todo")}>
                Catatan To-Do
              </Dropdown.Item>
          <Dropdown.Item style={{ backgroundColor: "#fffff" }}onClick={() => handlePageChange("new/folder")}>
            Folder Baru
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
      <div className="menu">
        <img
          className="icon-home"
          src={getIcon("home")}
          alt="Home"
          onClick={() => handlePageChange("home")}
        />
        <FontAwesomeIcon
          className="icon-folder"
          icon={getIcon("folder")}
          alt="Folder"
          onClick={() => handlePageChange("folder")}
        />
        <FontAwesomeIcon
          className="icon-favorite"
          icon={getIcon("favorite")}
          alt="Favorite"
          onClick={() => handlePageChange("favorite")}
        />
        <Dropdown>
          <Dropdown.Toggle
            variant="transparent"
            id="dropdown-profile"
            className="icon-profi"
          >
            <FontAwesomeIcon className="iconprofi" icon={getIcon("profile")} alt="Profile" style={{ fontSize: "24px" }} />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handlePageChange("profile/edit")}>
              Edit Profil
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handlePageChange("profile/history")}>
              Riwayat
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handlePageChange("profile/trash")}>
              Sampah
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div >
        <FontAwesomeIcon
          className="logout"
          icon={faSignOutAlt}
          alt="Log-out"
          style={{ color: "#000000" }}
        />
      </div>
    </div>



    <Modal className="modal-catatan" show={showNoteModal} onHide={handleHideNoteModal} size="lg"
    centered>
        <Modal.Header closeButton>
        <Modal.Title>Catatan Baru</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Button className="btn-kategori" variant="secondary" >
          Belum Dikategorikan
        </Button>
        <Form.Control className="input-jdlnote"
      type="text"
      placeholder="Judul"
      value={judul}
      onChange={handleJudulCatatan}
    />
    <Form.Control
      as="textarea"
      rows={3}
      placeholder="Catatan"
      value={isi}
      onChange={handleIsiCatatan}
    />
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-batal" onClick={handleHideNoteModal}>
            Batal
          </Button>
          <Button className="btn-simpan"  onClick={handleCreateNote}>
            Simpan
          </Button>
        </Modal.Footer>
      </Modal>




      <Modal className="modal-todo"show={showTodoModal}  onHide={handleHideTodoModal}size="lg"
    centered>
        <Modal.Header closeButton>
          <Modal.Title>To-Do List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Button className="btn-kategori" variant="secondary" >
          Belum Dikategorikan
        </Button>
        <Form.Control className="input-jdltodo" type="text" placeholder="Judul" value={judul_todolist} onChange={handleJudulTodolist}/>
          <Form.Control className="input-tugas" type="text" placeholder="Enter task" value={newTugas} onChange={handleTaskChange} />
          <Button className="btnadd" onClick={addTugas}>Add Task</Button>

          <hr />

          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {tugas.map((tugas, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  checked={tugas.status}
                  onChange={() => handleCheckboxChange(index)}
                />
                <span style={{ marginLeft: '10px', listStyle:'none', textDecoration: tugas.completed ? 'line-through' : 'none' }}>{tugas.tugas}</span>
                <FontAwesomeIcon
                  icon={faXmark} // Ganti dengan ikon hapus yang diinginkan, contoh: faTrashAlt dari FontAwesome
                  onClick={() => handleDeleteTask(index)} // Menjalankan fungsi untuk menghapus task tertentu
                  style={{
                    position: 'absolute',
                    right: '20px', // Sesuaikan dengan jarak yang diinginkan dari tepi kanan
                    fontSize: '25px',
                    cursor: 'pointer'
                  }}
                />
              </li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-simpan" variant="secondary" onClick={handleCreateTodolist}>Simpan</Button>
        </Modal.Footer>
      </Modal>




      <Modal className="modal-folder" show={showFolderModal} onHide={handleHideFolderModal} centered>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <h3 className="jd-folder">New Folder</h3>
        <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="folderName"
              placeholder="New Folder"
              value={nama_folder}
              onChange={handleFolderNameChange}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-batal" onClick={handleHideFolderModal}>
            Batal
          </Button>
          <Button className="btn-buat" onClick={handleCreateFolder}>
            Buat
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default WebNavbar;
