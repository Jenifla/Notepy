import React from 'react'
import "./Folder.css";
import axios from 'axios';
import image1 from "../../aset/User.png";
import image2 from "../../aset/Cari.png";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen, faEllipsisVertical} from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap'; 


const Folder = () => {
  const { folderId } = useParams();
  const [folder, setFolder] = useState([]);
  const [folderName, setFolderName] = useState('');
  const [activeFolder, setActiveFolder] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [folderIdToEdit, setFolderIdToEdit] = useState(null);

  const fetchFolders = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:8080/folder', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setFolder(data); // Set data folder ke state folder
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error fetching data dari API (menampilkan pesan kesalahan, dst)
    }
  };

  const displayFolderName = (folderId, namaFolder) => {
    setFolderName(namaFolder);
    fetchNotesByFolder(folderId);
    fetchTodosByFolder(folderId); // Tambahkan pemanggilan ke fungsi untuk mengambil catatan
    // Set ID folder yang dipilih ke state untuk penggunaan selanjutnya
    setActiveFolder(folderId); // Atau gunakan state lain untuk menyimpan ID folder yang dipilih
  };
    
    const toggleDropdown = (folderId) => {
      setActiveFolder(activeFolder === folderId ? null : folderId);
      
    };

    const handleEditClick = (folderId, folderName) => {
      setFolderIdToEdit(folderId);
      setFolderName(folderName); 
      setShowModal(true);
    };
  
    const handleSaveChanges = async () => {
      try {
        const token = localStorage.getItem('token');
        

        const response = await axios.put(`http://localhost:8080/folder/edit/${folderIdToEdit}`, {
          nama_folder: folderName // Kirim data yang ingin diubah beserta ID folder
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        
        });
        if (response.status === 200) {
          setShowModal(false);
          fetchFolders(); // Ambil ulang data folder setelah mengubah
          window.location.reload();
        } else {
          console.error('Failed to update folder', response);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    const handleDeleteClick = async (folderId) => {
      try {
        const token = localStorage.getItem('token');
        
        const response = await axios.delete(`http://localhost:8080/folder/delete/${folderId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
  
        if (response.status === 200) {
          fetchFolders(); // Ambil ulang data folder setelah menghapus
        } else {
          console.error('Failed to delete folder', response);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  

  const jumlahFolder = folder.length;
 
  const fetchNotesByFolder = async (folderId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:8080/catatan/folder/${folderId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
  
      if (response.status === 200) {
        const data = response.data;
        // Tampilkan catatan dengan ID folder yang sesuai di sini
        console.log('Notes in Folder', folderId, ':', data);
        // Anda dapat menambahkan logika untuk menampilkan catatan dalam state atau di tempat yang sesuai
      } else {
        console.error('Failed to fetch notes for folder', folderId, response);
      }
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const fetchTodosByFolder = async (folderId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:8080/todolist/folder/${folderId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
  
      if (response.status === 200) {
        const data = response.data;
        // Tampilkan catatan dengan ID folder yang sesuai di sini
        console.log('Notes in Folder', folderId, ':', data);
        // Anda dapat menambahkan logika untuk menampilkan catatan dalam state atau di tempat yang sesuai
      } else {
        console.error('Failed to fetch notes for folder', folderId, response);
      }
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

   // Menggunakan useEffect untuk menangani efek samping
   useEffect(() => {
    fetchFolders();
    // fetchNotesByFolder();
    // Contoh efek samping: memuat data dari API atau sumber data lainnya
    // Misalnya, Anda bisa memuat data catatan dari server di sini
  }, []);


  return (
    <div>
      <div className="rectangle-2">
        {folder.map((item) => (
          <div key={item.id_folder} className="grid-item">
            <Link to={`/detail-folder/${item.id_folder}`} onClick={() => displayFolderName(item.id_folder,  item.nama_folder)}>
              <FontAwesomeIcon className="icon-folder-open" alt="Icon folder open" icon={faFolderOpen} />
              <div className="text-wrapper-5">{item.nama_folder}</div>
            </Link>
            <div className="dropdown" onClick={() => toggleDropdown(item.id_folder)}>
              <FontAwesomeIcon className="ellipsis" icon={faEllipsisVertical} />
              {activeFolder === item.id_folder && (
                <div className="dropdown-content">
                  <p onClick={() => handleEditClick(item.id_folder, item.nama_folder)}>Edit</p>
                  <p onClick={() => handleDeleteClick(item.id_folder)} >Hapus</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* Modal Bootstrap */}
      <Modal className="modal-edit-folder"show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>
        <h3 className="jd-folder">Ganti Nama</h3>
        <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="folderName"
              placeholder="New Folder"
              value={folderName}
              onChange={(e) => setFolderName(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-batal" variant="secondary" onClick={() => setShowModal(false)}>
            Batal
          </Button>
          {/* Tombol "Save Changes" atau fungsi lainnya untuk menyimpan perubahan */}
          <Button className="btn-buat" variant="primary" onClick={handleSaveChanges}>
            Simpan
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Folder
