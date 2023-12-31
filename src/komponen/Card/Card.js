import React, { useState, useEffect } from 'react'
import "./Card.css";
import axios from 'axios';
import { Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image3 from "../../aset/Love.png";
import image4 from "../../aset/icon edit.png";
import { faHeart as solidHeart, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
const Card = () => {
  const [todoList, setTodoLists] = useState([]);
  const handleTodoClick = (todo) => {
    setShowModalTodo(true);
    setSelectedTodo(todo)
  };

  const fetchTodoSampah = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:8080/todolist/sampah', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setTodoLists(data); // Set data folder ke state folder
      } else {
        const errorData = await response.json();
        throw new Error(`Failed to fetch data: ${errorData.message}`);
      }
      
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error fetching data dari API (menampilkan pesan kesalahan, dst)
    }
  };

  const handleRestoreTodo = async (todoId) => {
    try {
      const token = localStorage.getItem('token');
  
      const response = await axios.put(
        `http://localhost:8080/todolist/restore/${todoId}`,
        { dihapus: false }, // Menggunakan objek { dihapus: true } untuk menandai catatan dihapus
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
  
      if (response.status === 200) {
        fetchTodoSampah(); // Ambil ulang data folder setelah menghapus
        window.location.reload();
      } else {
        console.error('Failed to delete folder', response);
      }
    } catch (error) {
      if (error.response) {
        // Kesalahan terkait respons dari server (misalnya status code di luar 2xx)
        console.error('Response error:', error.response.data);
        console.error('Status code:', error.response.status);
        console.error('Headers:', error.response.headers);
      } else if (error.request) {
        // Kesalahan terkait permintaan tidak mendapatkan respons
        console.error('Request error:', error.request);
      } else {
        // Kesalahan lainnya
        console.error('Error:', error.message);
      }
    }
  };

  const handlePermanenTodo = async (todoId) => {
    try {
      const token = localStorage.getItem('token');
      console.log('handleDeleteTodo called with todoId:', todoId);
      const response = await axios.delete(
        `http://localhost:8080/todolist/delete/${todoId}`,
        // Menggunakan objek { dihapus: true } untuk menandai catatan dihapus
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
  
      if (response.status === 200) {
        fetchTodoSampah(); // Ambil ulang data folder setelah menghapus
        window.location.reload();
      } else {
        console.error('Failed to delete folder', response);
      }
    } catch (error) {
      if (error.response) {
        // Kesalahan terkait respons dari server (misalnya status code di luar 2xx)
        console.error('Response error:', error.response.data);
        console.error('Status code:', error.response.status);
        console.error('Headers:', error.response.headers);
      } else if (error.request) {
        // Kesalahan terkait permintaan tidak mendapatkan respons
        console.error('Request error:', error.request);
      } else {
        // Kesalahan lainnya
        console.error('Error:', error.message);
      }
    }
  };

  

  const handleDeleteTodoClick = (todo) => {
    handlePermanenTodo(todo.id_todolist); // Memanggil fungsi hapusNote dengan ID catatan yang akan dihapus
  };

  const fetchSampah = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:8080/sampah', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setNotes(data); // Set data folder ke state folder
      } else {
        const errorData = await response.json();
        throw new Error(`Failed to fetch data: ${errorData.message}`);
      }
      
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error fetching data dari API (menampilkan pesan kesalahan, dst)
    }
  };

  const [notes, setNotes] = useState([]);

  
  const [showModal, setShowModal] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);
  const [showModalTodo, setShowModalTodo] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);

  // Fungsi untuk menampilkan modal dan detail catatan terpilih
  const handleNoteClick = (note) => {
    setSelectedNote(note);
    setShowModal(true);
  };

  const handlePermanen = (note) => {
    // Lakukan logika untuk mengedit catatan di sini
    console.log('Catatan akan diubah:', note);
  };

  const handlePermanenNote = async (catatanId) => {
    try {
      const token = localStorage.getItem('token');
  
      const response = await axios.delete(
        `http://localhost:8080/catatan/delete/${catatanId}`,
         // Menggunakan objek { dihapus: true } untuk menandai catatan dihapus
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
  
      if (response.status === 200) {
        fetchSampah(); // Ambil ulang data folder setelah menghapus
        window.location.reload();
      } else {
        console.error('Failed to delete folder', response);
      }
    } catch (error) {
      if (error.response) {
        // Kesalahan terkait respons dari server (misalnya status code di luar 2xx)
        console.error('Response error:', error.response.data);
        console.error('Status code:', error.response.status);
        console.error('Headers:', error.response.headers);
      } else if (error.request) {
        // Kesalahan terkait permintaan tidak mendapatkan respons
        console.error('Request error:', error.request);
      } else {
        // Kesalahan lainnya
        console.error('Error:', error.message);
      }
    }
  };

  const handleRestore = async (catatanId) => {
    try {
      const token = localStorage.getItem('token');
  
      const response = await axios.put(
        `http://localhost:8080/catatan/restore/${catatanId}`,
        { dihapus: false }, // Menggunakan objek { dihapus: true } untuk menandai catatan dihapus
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
  
      if (response.status === 200) {
        fetchSampah(); // Ambil ulang data folder setelah menghapus
        window.location.reload();
      } else {
        console.error('Failed to delete folder', response);
      }
    } catch (error) {
      if (error.response) {
        // Kesalahan terkait respons dari server (misalnya status code di luar 2xx)
        console.error('Response error:', error.response.data);
        console.error('Status code:', error.response.status);
        console.error('Headers:', error.response.headers);
      } else if (error.request) {
        // Kesalahan terkait permintaan tidak mendapatkan respons
        console.error('Request error:', error.request);
      } else {
        // Kesalahan lainnya
        console.error('Error:', error.message);
      }
    }
  };
  
    const handleRestoreClick= (note) => {
      handleRestore(note.id_catatan); // Memanggil fungsi hapusNote dengan ID catatan yang akan dihapus
    };
  // Fungsi untuk menangani tombol hapus
 

  // Fungsi untuk menangani tombol belum dikategorikan
  const handleUncategorized = (note) => {
    // Lakukan logika untuk catatan yang belum dikategorikan di sini
    console.log('Catatan belum dikategorikan:', note);
  };


  // Menggunakan useEffect untuk menangani efek samping
  useEffect(() => {
    fetchSampah();
    fetchTodoSampah();
    // Contoh efek samping: memuat data dari API atau sumber data lainnya
    // Misalnya, Anda bisa memuat data catatan dari server di sini
  }, []);
  const formatDate = (dbDateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dbDateString);
    return date.toLocaleDateString('id-ID', options); // Ganti 'id-ID' dengan kode bahasa yang diinginkan
  };

  return (
    <div>
      <div className="konten-note-sam">
          {notes.map((note) => (
                <div key={note.id_catatan} className="note" onClick={() => handleNoteClick(note)} >
                  <h3 className="note-title">{note.judul}</h3>
                  <p className="note-content">{note.isi}</p>
                  <div className="icon-love">
                  {note.favorite && <img className="love" alt="Love" src={image3} />}
                  </div>
                  <div className="date">{formatDate(note.tgl_buat)}</div>
                  
                </div>
              ))}

            {todoList.map((list) => (
                <div key={list.id_todolist} className="note" onClick={() => handleTodoClick(list)}>
                  <h3 className="note-title">{list.judul_todolist}</h3>
                  <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {list.tugas.map((task) => (
                      <li className="note-content" key={task.id_tugas}>
                        <input
                        
                          type="checkbox"
                          
                          checked={task.completed}
                          // onChange={() => handleCheckboxChange(task.id_tugas)}
                        />
                        <span
                          style={{
                            marginLeft: '10px',
                            textDecoration: task.completed ? 'line-through' : 'none'
                          }}
                        >
                          {task.tugas}
                        </span>
                        
                      </li>
                    ))}
                  </ul>
                  <div className="icon-love">
                    {list.difavoritkan && <img className="love" alt="Love" src={image3} />}
                    </div>
                    <div className="date">{formatDate(list.date)}</div>
                    
                </div>
                        ))}
          </div>


          <Modal className="modal-sampah-note" show={showModal} onHide={() => setShowModal(false)}
    size="lg"
    centered>
<Modal.Header closeButton>
</Modal.Header>
<Modal.Body>
  <div>
    {selectedNote && (
      <div className="hder">
        {selectedNote.favorite ? (
          <FontAwesomeIcon className="icon-fav" icon={solidHeart} style={{ color: 'red' }} />
        ) : (
          <FontAwesomeIcon className="icon-fav" icon={regularHeart} style={{ color: 'black' }} />
        )}
        <Button className="btn-edit"  onClick={() => handleRestore(selectedNote.id_catatan)}>
          Pulihkan
        </Button>
        <Button className="btn-hapus"  onClick={() => handlePermanenNote(selectedNote.id_catatan)}>
          Hapus
        </Button>
      </div>
      
    )}
    <div style={{ marginTop: '10px' }}>
      <Button className="btn-kategori" variant="secondary" onClick={() => handleUncategorized(selectedNote)}>
        Belum Dikategorikan
      </Button>
    </div>
    {selectedNote && (
      <div>
        <h3>{selectedNote.judul}</h3>
        <p>{selectedNote.isi}</p>
        <p className="tanggal">Terakhir diubah: {formatDate(selectedNote.tgl_edit)}</p>
      </div>
    )}
  </div>
</Modal.Body>
</Modal>

<Modal className="modal-sampah-todo" show={showModalTodo} onHide={() => setShowModalTodo(false)} size="lg" centered>
  <Modal.Header closeButton></Modal.Header>
  <Modal.Body>
    <div>
      {selectedTodo && (
        <div className="hder">
          <FontAwesomeIcon
          className="icon-fav"
          icon={selectedTodo.difavoritkan === 1 ? solidHeart : regularHeart} // Menggunakan solidHeart jika difavoritkan, dan regularHeart jika tidak difavoritkan
          style={{ color: selectedTodo.difavoritkan === 1 ? 'red' : 'black' }}
          // onClick={() => toggleFavoriteTodo(selectedTodo.id_todolist, !selectedTodo.difavoritkan)}
        />
          {/* Button Edit */}
          
          <Button className="btn-edit" onClick={() => handleRestoreTodo(selectedTodo.id_todolist)}>
            Pulihkan
          </Button>
          {/* Button Hapus  */}
          <Button className="btn-hapus" onClick={() => handlePermanenTodo(selectedTodo.id_todolist)}> 
            Hapus
          </Button>
        </div>
      )}
      <div style={{ marginTop: '10px' }}>
        {/* Button untuk kategori belum dikategorikan */}
        <Button className="btn-kategori" variant="secondary" >
          Belum Dikategorikan
        </Button>
      </div>
      {/* Menampilkan detail dari selectedTodo */}
      {selectedTodo  && (
        <div>
          <h3>{selectedTodo.judul_todolist}</h3>
          <p>{/* Tampilkan tugas di sini */}</p>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {selectedTodo.tugas.map((task) => (
              <li key={task.id_tugas}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  // onChange={() => handleCheckboxChange(task.id_tugas)}
                />
                <span style={{ marginLeft: '10px', textDecoration: task.completed ? 'line-through' : 'none' }}>
                  {task.tugas}
                </span>
                <FontAwesomeIcon
                  icon={faXmark} // Ganti dengan ikon hapus yang diinginkan, contoh: faTrashAlt dari FontAwesome
                  // onClick={() => handleDeleteTask( task.id_tugas)} // Menjalankan fungsi untuk menghapus task tertentu
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
          <p className="tanggal">Terakhir diubah: {formatDate(selectedTodo.date)}</p>
        </div>
      )}
    </div>
  </Modal.Body>
</Modal>

    </div>
    

    
  )
}

export default Card
