// Cards.jsx

import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import "./Cards.css";
import axios from 'axios';
import { Modal, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

import Card from "../Card/Card"; // Import komponen Card
import image3 from "../../aset/Love.png";


const Cards = ({ showOnlyFavorites , showFolderNote}) => {
  const { folderId } = useParams();
  console.log('Nilai folderId:', folderId);
  const [selectedTodolistId, setSelectedTodolistId] = useState(null);
  const [todolistId, setTodolistId] = useState(null);
  // Inisialisasi state untuk menyimpan id_catatan yang dipilih
  const [selectedCatatanId, setSelectedCatatanId] = useState(null);
  const [selectedFolderName, setSelectedFolderName] = useState('');
  const [folder, setFolder] = useState([]);
  const [notes, setNotes] = useState([]);
  const [catatanJudul, setcatatanJudul] = useState('');
  const [catatanIsi, setcatatanIsi,] = useState('');
  const [todoJudul, settodoJudul] = useState('');
  const [todoTugas, settodoTugas,] = useState('');
  const [statusTugas, setstatusTugas,] = useState('');
  const [catatanId, setCatatanId] = useState(null);
  // State untuk menyimpan catatan favorit
  const [favoriteNotes, setFavoriteNotes] = useState([]);
  const [folderNotes, setFolderNotes] = useState([]);
  const [todoLists, setFavoriteTodos] = useState([]);

  const [todoList, setTodoLists] = useState([]);

  const [showModalTodo, setShowModalTodo] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const [showModalEditTodo, setShowModalEditTodo] = useState(false);
  const [selectedEditTodo, setSelectedEditTodo] = useState(null);

  
  


  const fetchFolder = async () => {
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
        const errorData = await response.json();
        throw new Error(`Failed to fetch data: ${errorData.message}`);
      }
      
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error fetching data dari API (menampilkan pesan kesalahan, dst)
    }
  };


  // Fungsi untuk mengambil dan menampilkan catatan favorit
  const fetchFavoriteNotes = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch('http://localhost:8080/favorite', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
         // Filter catatan yang difavoritkan
        setFavoriteNotes(data); // Set catatan favorit ke state
      } else {
        const errorData = await response.json();
        throw new Error(`Failed to fetch data: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error fetching data dari API
    }
  };

  const fetchFavoriteTodos = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch('http://localhost:8080/todolist/favorite', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
         // Filter catatan yang difavoritkan
        setFavoriteTodos(data); // Set catatan favorit ke state
      } else {
        const errorData = await response.json();
        throw new Error(`Failed to fetch data: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error fetching data dari API
    }
  };

  const fetchCatatan = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:8080/catatan', {
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

  const fetchTodolist = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:8080/todolist', {
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

  const displayCatatan = (catatanJudul, catatanIsi) => {
    setcatatanJudul(catatanJudul);
    setcatatanIsi(catatanIsi);
  }


  
  const [showModalNote, setShowModalNote] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);
  

  // Fungsi untuk menampilkan modal dan detail catatan terpilih
const handleNoteClick = (note) => {
  setSelectedNote(note);
  setSelectedCatatanId(note.id_catatan);
  setShowModalNote(true);
  console.log('Data yang diambil saat menampilkan modal note:', note);

  // Pemeriksaan sebelum pemanggilan updateLastViewedAt
  if (note.id_catatan) {
    updateLastViewedAt(note.id_catatan);
  } else {
    console.error('Catatan ID kosong atau tidak valid');
    // Lakukan penanganan jika catatan ID kosong atau tidak valid
  }

  // Mendapatkan data selectedFolderData dari localStorage
  const storedSelectedFolderData = JSON.parse(localStorage.getItem('selectedFolderData'));

 
  // Menampilkan nama folder yang sesuai jika id_catatan cocok dengan catatan yang ditampilkan
  if (storedSelectedFolderData && storedSelectedFolderData.id_catatan === note.id_catatan) {
    setSelectedFolderName(storedSelectedFolderData.nama_folder);
  } else {
    // Jika id_catatan tidak cocok atau tidak ada data di localStorage, tampilkan teks "Belum Dikategorikan"
    setSelectedFolderName('Belum Dikategorikan');
  }

};

  


  const handleKategoriNoteClick = (item) => {
    setSelectedKategoriNote(item);
    setShowModalKategoriNote(true);
    
  };
  const handleKategoriTodo = (item) => {
    setSelectedKategoriTodo(item);
    setShowModalKategoriTodo(true);
    
  };

  const [showModalEditNote, setShowModalEditNote] = useState(false);
  const [selectedEditNote, setSelectedEditNote] = useState(null);
  

  const handleEdit = (note) => {
    setSelectedEditNote(note);
    setcatatanJudul(note.judul); // Mengatur judul catatan yang akan diubah
    setcatatanIsi(note.isi); // Mengatur isi catatan yang akan diubah
    setShowModalEditNote(true);
  };
  
  // // Fungsi untuk menangani tombol belum dikategorikan
  // const handleUncategorized = (note) => {
  //   // Lakukan logika untuk catatan yang belum dikategorikan di sini
  //   console.log('Catatan belum dikategorikan:', note);
  //   setShowModalKategori(true);
  // };

  useEffect(() => {

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
          const data = response.data; // Menggunakan response.data untuk mengakses data respons
          setFolderNotes(data); // Set data folder ke state folder
          console.log('Data from API:', data);
        } else {
          const errorData = await response.json();
          throw new Error(`Failed to fetch data: ${errorData.message}`);
        }
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };
    if (showOnlyFavorites) {
      fetchFavoriteNotes(); // Jika hanya menampilkan catatan favorit, panggil fungsi untuk mengambil catatan favorit
      fetchFavoriteTodos();
    } else if (showFolderNote){
      fetchNotesByFolder(folderId);
      console.log("selectedFolderId:", folderId);
    }else{
      fetchCatatan(); // Jika menampilkan semua catatan, panggil fungsi untuk mengambil semua catatan
      fetchTodolist();
    }
    

    
    // if (selectedFolderId) {
    //   fetchNotesByFolder(selectedFolderId);
    //   console.log("selectedFolderId:", selectedFolderId);
    // } else {
    //   fetchCatatan(); // Jika menampilkan semua catatan, panggil fungsi untuk mengambil semua catatan
    //   fetchTodolist();
    // }
    console.log("selectedFolderId:", folderId);
    fetchFolder();
    if (showModalNote) {
      // Mendapatkan data selectedFolderData dari localStorage ketika modal ditampilkan
      const storedSelectedFolderData = JSON.parse(localStorage.getItem('selectedFolderData'));
  
      // Menampilkan nama folder yang sesuai jika id_catatan cocok dengan catatan yang ditampilkan
      if (storedSelectedFolderData && storedSelectedFolderData.id_catatan === selectedNote.id_catatan) {
        setSelectedFolderName(storedSelectedFolderData.nama_folder);
      } else {
        // Jika id_catatan tidak cocok atau tidak ada data di localStorage, tampilkan teks "Belum Dikategorikan"
        setSelectedFolderName('Belum Dikategorikan');
      }
    }

    if (showModalTodo) {
      // Mendapatkan data selectedFolderData dari localStorage ketika modal ditampilkan
      const storedSelectedFolderData = JSON.parse(localStorage.getItem('selectedFolderData'));
  
      // Menampilkan nama folder yang sesuai jika id_catatan cocok dengan catatan yang ditampilkan
      if (storedSelectedFolderData && storedSelectedFolderData.id_todolist === selectedTodo.id_todolist) {
        setSelectedFolderName(storedSelectedFolderData.nama_folder);
      } else {
        // Jika id_catatan tidak cocok atau tidak ada data di localStorage, tampilkan teks "Belum Dikategorikan"
        setSelectedFolderName('Belum Dikategorikan');
      }
    }


    if (showModalNote) {
      updateLastViewedAt(catatanId);
    }
    // Contoh efek samping: memuat data dari API atau sumber data lainnya
    // Misalnya, Anda bisa memuat data catatan dari server di sini
  }, [showOnlyFavorites, catatanId, todolistId, showModalNote, selectedNote, showModalTodo, selectedTodo, showFolderNote]);

  const formatDate = (dbDateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dbDateString);
    return date.toLocaleDateString('id-ID', options); // Ganti 'id-ID' dengan kode bahasa yang diinginkan
  };

  const handleSaveNoteChanges = async () => {
    try {
      const token = localStorage.getItem('token');
      const catatanId = selectedEditNote.id_catatan;

      const response = await axios.put(`http://localhost:8080/catatan/edit/${catatanId}`, {
        judul: catatanJudul,
        isi: catatanIsi // Kirim data yang ingin diubah beserta ID folder
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      
      });
      if (response.status === 200) {
        setShowModalEditNote(false);
        fetchCatatan(); // Ambil ulang data folder setelah mengubah
        window.location.reload();
      } else {
        console.error('Failed to update folder', response);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDeleteClick = async (catatanId) => {
  try {
    const token = localStorage.getItem('token');

    const response = await axios.put(
      `http://localhost:8080/catatan/sampah/${catatanId}`,
      { dihapus: true }, // Menggunakan objek { dihapus: true } untuk menandai catatan dihapus
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.status === 200) {
      fetchCatatan(); // Ambil ulang data folder setelah menghapus
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

  const handleDelete = (note) => {
    handleDeleteClick(note.id_catatan); // Memanggil fungsi hapusNote dengan ID catatan yang akan dihapus
  };



  const toggleFavorite = async (catatanId, currentStatus) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(
        `http://localhost:8080/catatan/favorite/${catatanId}`,
        { difavoritkan: !currentStatus }, // Mengirim status favorit yang baru
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
  
      
      if (response.status === 200) {
        
     fetchCatatan();
     
     console.log('Detail data terbaru:', response)
    // window.location.reload();
      } else {
        console.error('Failed to toggle favorite status:', response);
      }
    } catch (error) {
      console.error('Error toggling favorite status:', error);
      // Tangani kesalahan di sini
    }
  };




  const handleKategoriTodolist = async (folderId) => {
    console.log('id todolist,' ,selectedTodolistId);
    try {
      console.log('Data yang akan dikirim ke backend:', {
        folderId: folderId,
        id_todolist: selectedTodolistId,
        // ... data lain yang dikirim
      });
      const token = localStorage.getItem('token');
      const response = await axios.post(
        `http://localhost:8080/todolist/kategori/${selectedTodolistId}`,
        {
          folderId: folderId,
          
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
  
      if (response.status === 200) {
        console.log('Catatan berhasil dikategorikan ke dalam folder.');
        console.log('Data kategori yang diterima dari backend:', response.data); // Tampilkan seluruh respons
        const selectedFolderName = response.data.selectedFolderName;
        console.log('Nama folder yang dipilih:', selectedFolderName);
      
        // Membuat objek yang menggabungkan id_catatan dan nama_folder
      const dataToStore = {
        id_todolist: selectedTodolistId,
        nama_folder: selectedFolderName,
      };

        localStorage.setItem('selectedFolderData', JSON.stringify(dataToStore));

        // Periksa apakah nilai selectedFolderName berhasil disimpan ke localStorage
      const storedSelectedFolderData = localStorage.getItem('selectedFolderData');
      console.log('Nilai selectedFolderName setelah disimpan ke localStorage:', storedSelectedFolderData);


      // Update state dengan nama folder yang dipilih
      setSelectedFolderName(selectedFolderName);
        // Di sini Anda dapat melakukan pembaruan UI atau logika lain yang diperlukan setelah mengkategorikan catatan
      } else {
        console.error('Gagal mengkategorikan todolist ke dalam folder:', response);
      }
    } catch (error) {
      console.error('Error saat mengkategorikan catatan ke dalam folder:', error);
      if (error.response) {
        console.error('Detail respons dari server:', error.response.data);
        console.error('Status code:', error.response.status);
        console.error('Headers:', error.response.headers);
      }
    }
  };

  const handleKategoriNote = async (folderId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        `http://localhost:8080/catatan/kategori/${selectedCatatanId}`,
        {
          folderId: folderId,
          
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
  
      if (response.status === 200) {
        console.log('Catatan berhasil dikategorikan ke dalam folder.');
        const selectedFolderName = response.data.selectedFolderName;
        console.log('Data kategori yang diterima dari backend:', selectedFolderName);

        // Membuat objek yang menggabungkan id_catatan dan nama_folder
      const dataToStore = {
        id_catatan: selectedCatatanId,
        nama_folder: selectedFolderName,
      };

        localStorage.setItem('selectedFolderData', JSON.stringify(dataToStore));

        // Periksa apakah nilai selectedFolderName berhasil disimpan ke localStorage
      const storedSelectedFolderData = localStorage.getItem('selectedFolderData');
      console.log('Nilai selectedFolderName setelah disimpan ke localStorage:', storedSelectedFolderData);


      // Update state dengan nama folder yang dipilih
      setSelectedFolderName(selectedFolderName);
        // Di sini Anda dapat melakukan pembaruan UI atau logika lain yang diperlukan setelah mengkategorikan catatan
      } else {
        console.error('Gagal mengkategorikan catatan ke dalam folder:', response);
      }
    } catch (error) {
      console.error('Error saat mengkategorikan catatan ke dalam folder:', error);
      // Tangani kesalahan di sini
    }
  };


  const handleUnKategoriNote = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.put(`http://localhost:8080/catatan/unkategori/${selectedCatatanId}`, {
          folderId: null,
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 200) {
          console.log('Catatan berhasil diunkategorikan dari folder.');
        const updatedCatatan = response.data.updatedCatatan;
        console.log('Data kategori yang diterima dari backend:', updatedCatatan);

        // Membuat objek yang menggabungkan id_catatan dan nama_folder
      const dataToStore = {
        id_catatan: selectedCatatanId,
        nama_folder: null,
      };

        localStorage.setItem('selectedFolderData', JSON.stringify(dataToStore));

        // Periksa apakah nilai selectedFolderName berhasil disimpan ke localStorage
      const storedSelectedFolderData = localStorage.getItem('selectedFolderData');
      console.log('Nilai selectedFolderName setelah disimpan ke localStorage:', storedSelectedFolderData);

            // Lakukan pembaruan state atau tindakan lain setelah kategori dihapus
            // Misalnya, dapat memperbarui data catatan pada halaman yang sedang ditampilkan
        }
    } catch (error) {
        console.error('Error removing category:', error);
        // Handle error saat menghapus kategori catatan dari API
    }
};

const handleUnKategoriTodo = async () => {
  try {
      const token = localStorage.getItem('token');
      const response = await axios.put(`http://localhost:8080/todolist/unkategori/${selectedTodolistId}`, {
        folderId: null,
      }, {
          headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
          },
      });

      if (response.status === 200) {
        console.log('Catatan berhasil diunkategorikan dari folder.');
      const updatedTodoList = response.data.updatedTodoList;
      console.log('Data kategori yang diterima dari backend:', updatedTodoList);

      // Membuat objek yang menggabungkan id_catatan dan nama_folder
    const dataToStore = {
      id_todolist: selectedTodolistId,
      nama_folder: null,
    };

      localStorage.setItem('selectedFolderData', JSON.stringify(dataToStore));

      // Periksa apakah nilai selectedFolderName berhasil disimpan ke localStorage
    const storedSelectedFolderData = localStorage.getItem('selectedFolderData');
    console.log('Nilai selectedFolderName setelah disimpan ke localStorage:', storedSelectedFolderData);

          // Lakukan pembaruan state atau tindakan lain setelah kategori dihapus
          // Misalnya, dapat memperbarui data catatan pada halaman yang sedang ditampilkan
      }
  } catch (error) {
      console.error('Error removing category:', error);
      // Handle error saat menghapus kategori catatan dari API
  }
};
  
  const [showModalKategoriNote, setShowModalKategoriNote] = useState(false);
  const [selectedKategoriNote, setSelectedKategoriNote] = useState(false);

  const [showModalKategoriTodo, setShowModalKategoriTodo] = useState(false);
  const [selectedKategoriTodo, setSelectedKategoriTodo] = useState(false);





 
  const handleDeleteTask = (listIndex, taskIndex) => {
    const updatedTodoLists = [...todoList];
    updatedTodoLists[listIndex].tasks.splice(taskIndex, 1);
    setTodoLists(updatedTodoLists);
  };

  const handleCheckboxChange = (todoId, taskId, taskIndex) => {
    const updatedTodo = { ...selectedEditTodo }; // Salin data todo yang akan diperbarui
    const updatedTask = { ...updatedTodo.tugas[taskIndex] }; // Salin data tugas yang akan diperbarui
  
    // Ubah status tugas sesuai dengan perubahan kotak centang
    updatedTask.completed = !updatedTask.completed;
  
    // Tetapkan kembali tugas yang sudah diperbarui ke dalam todo yang sedang diperbarui
    updatedTodo.tugas[taskIndex] = updatedTask;
  
    // Tetapkan kembali data todo yang sudah diperbarui ke dalam state
    setSelectedEditTodo(updatedTodo);
  };
  
  
  

  const handleTaskStatusChange = async (todoId, taskId, taskIndex, statusData) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(
        `http://localhost:8080/todolist/edit/${todoId}`,
        { status: statusData },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        // Jika pembaruan status berhasil, perbarui state dengan data terbaru dari backend
        const updatedTodoList = todoList.map((todo, index) => {
          if (index === taskIndex) {
            const updatedTasks = todo.tasks.map((task) => {
              if (task.id_tugas === taskId) {
                return { ...task, completed: statusData };
              }
              return task;
            });
            return { ...todo, tasks: updatedTasks };
          }
          return todo;
        });
        setTodoLists(updatedTodoList);
      } else {
        console.error('Failed to update task status:', response);
      }
    } catch (error) {
      console.error('Error updating task status:', error);
    }
  };

   const handleTodoEdit = (todo) => {
    setSelectedEditTodo(todo);
    setShowModalEditTodo(true);
  };

  // Fungsi untuk menangani penyimpanan perubahan pada todo
  const handleSaveTodoChanges = async () => {
    try {
      const token = localStorage.getItem('token');
      const todoId = selectedEditTodo.id_todolist;
      const response = await axios.put(`http://localhost:8080/todolist/edit/${todoId}`, {
        judul_todolist: selectedEditTodo.judul_todolist,
        tugas: selectedEditTodo.tugas.map(task => ({
          id_tugas: task.id_tugas, // Jangan lupa sertakan ID tugas jika diperlukan di backend
          status: task.completed // Sertakan status tugas (completed) dari setiap task
        })),
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

     

      if (response.status === 200) {
        console.log('Perubahan berhasil disimpan!');
        setShowModalEditTodo(false);
        window.location.reload();
        // Lakukan hal lain yang diperlukan setelah perubahan berhasil disimpan
      } else {
        console.error('Gagal menyimpan perubahan!');
      }
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
      // Untuk mengetahui respons error dari Axios
  if (error.response) {
    // Respons server dengan status code di luar rentang 2xx
    console.error('Detail respons error:', error.response.data);
    console.error('Status code:', error.response.status);
    console.error('Headers:', error.response.headers);
  } else if (error.request) {
    // Permintaan yang tidak mendapatkan respons sama sekali
    console.error('Permintaan error:', error.request);
  } else {
    // Kesalahan lainnya saat mengatur dan menangani permintaan
    console.error('Kesalahan:', error.message);
  }
    }
  };

  const handleTodoClick = (todo) => {
    setShowModalTodo(true);
    setSelectedTodo(todo)
    setSelectedTodolistId(todo.id_todolist);
    console.log('Data yang diambil saat menampilkan modal todo:', todo);

    // Mendapatkan data selectedFolderData dari localStorage
  const storedSelectedFolderData = JSON.parse(localStorage.getItem('selectedFolderData'));
  console.log('Data yang disimpan', storedSelectedFolderData);
 
  // Menampilkan nama folder yang sesuai jika id_catatan cocok dengan catatan yang ditampilkan
  if (storedSelectedFolderData && storedSelectedFolderData.id_todolist === todo.id_todolist) {
    setSelectedFolderName(storedSelectedFolderData.nama_folder);
  } else {
    // Jika id_catatan tidak cocok atau tidak ada data di localStorage, tampilkan teks "Belum Dikategorikan"
    setSelectedFolderName('Belum Dikategorikan');
  }    
  };

  const handleDeleteTodo = async (todoId) => {
    try {
      const token = localStorage.getItem('token');
  
      const response = await axios.put(
        `http://localhost:8080/todolist/sampah/${todoId}`,
        { dihapus: true }, // Menggunakan objek { dihapus: true } untuk menandai catatan dihapus
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
  
      if (response.status === 200) {
        fetchCatatan(); // Ambil ulang data folder setelah menghapus
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

  const handleDeleteTodolist = (todo) => {
    handleDeleteTodo(todo.id_todolist); // Memanggil fungsi hapusNote dengan ID catatan yang akan dihapus
  };

  const toggleFavoriteTodo = async (todoId, currentStatus) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(
        `http://localhost:8080/todolist/favorite/${todoId}`,
        { difavoritkan: !currentStatus }, // Mengirim status favorit yang baru
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
  
      
      if (response.status === 200) {
       
     fetchTodolist();
    
     console.log('Detail data terbaru:', response)
    // window.location.reload();
      } else {
        console.error('Failed to toggle favorite status:', response);
      }
    } catch (error) {
      console.error('Error toggling favorite status:', error);
      // Tangani kesalahan di sini
    }
  };


  
  

  
// Fungsi untuk memperbarui timestamp terakhir dilihat
const updateLastViewedAt = async (catatanId) => {
  try {
    
    const token = localStorage.getItem('token');
    const response = await axios.put(`http://localhost:8080/catatan/riwayat/${catatanId}`,{},
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
    ); // Ganti URL_BACKEND dengan URL endpoint Anda
    if (response.status === 200) {
      console.log('Last viewed timestamp updated successfully');
      // Lakukan tindakan lain jika perlu
    } else {
      console.error('Failed to update last viewed timestamp');
      // Lakukan penanganan kesalahan jika diperlukan
    }
  } catch (error) {
    console.error('Failed to update last viewed timestamp', error);
  }
};





  return (
    <>
    <div className="konten-note">
    {showFolderNote &&
       folderNotes.map((note) => (
        // console.log("Note from folderNotes:", note);
          <div key={note.id_catatan} className="note" onClick={() => handleNoteClick(note)}>
          <h3 className="note-title">{note.judul}</h3>
          <p className="note-content">{note.isi}</p>
          <div className="icon-love">
          {note.difavoritkan && <img className="love" alt="Love" src={image3} />}  
          </div>
          <div className="date">{formatDate(note.tgl_buat)}</div>
        </div>
       ))
}
    
    {showOnlyFavorites
        ? favoriteNotes.map((note) => ( 
          <div key={note.id_catatan} className="note" onClick={() => handleNoteClick(note)}>
          <h3 className="note-title">{note.judul}</h3>
          <p className="note-content">{note.isi}</p>
          <div className="icon-love">
          {note.difavoritkan && <img className="love" alt="Love" src={image3} /> }
          </div>
          <div className="date">{formatDate(note.tgl_buat)}</div>
        </div>
        ))

    : notes.map((note) => {
      console.log("Nilai difavoritkan:",note.id_catatan, note.difavoritkan);
      return (
        <div key={note.id_catatan} className="note" onClick={() => handleNoteClick(note)}>
          <h3 className="note-title">{note.judul}</h3>
          <p className="note-content">{note.isi}</p>
          <div className="icon-love">
          {note.difavoritkan === 1 ? <img className="love" alt="Love" src={image3} /> : null}
          </div>
          <div className="date">{formatDate(note.tgl_buat)}</div>
        </div>
      );
    })}
  

{showOnlyFavorites
        ? todoLists.map((list) => ( 
          <div key={list.id_todolist} className="note" onClick={() => handleTodoClick(list)}>
    <h3 className="note-title">{list.judul_todolist}</h3>
    <div className="icon-love">
    {console.log(list.difavoritkan)}
      {list.difavoritkan && <img className="love" alt="Love" src={image3} />}
      </div>
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {list.tugas.map((task) => (
        <li className="note-content" key={task.id_tugas}>
          <input
          
            type="checkbox"
            checked={task.completed}
            onChange={() => handleCheckboxChange(task.id_tugas)}
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
    
      <div className="date">{formatDate(list.date)}</div>
      
  </div>
        ))

         : (
          todoList && todoList.map((list) => (
  <div key={list.id_todolist} className="note" onClick={() => handleTodoClick(list)}>
    <h3 className="note-title">{list.judul_todolist}</h3>
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {list.tugas.map((task) => (
        <li className="note-content" key={task.id_tugas}>
          <input
          
            type="checkbox"
            checked={task.completed}
            onChange={() => handleCheckboxChange(task.id_tugas)}
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
          )

))}
</div>

<Modal className="modal-note" show={showModalNote} onHide={() => setShowModalNote(false)}
    size="lg"
    centered>
<Modal.Header closeButton>
</Modal.Header>
<Modal.Body>
  <div>
    {selectedNote && (
      <div className="hder">
        <FontAwesomeIcon
          className="icon-fav"
          icon={selectedNote.difavoritkan === 1 ? solidHeart : regularHeart} // Menggunakan solidHeart jika difavoritkan, dan regularHeart jika tidak difavoritkan
          style={{ color: selectedNote.difavoritkan === 1 ? 'red' : 'black' }}
          onClick={() => toggleFavorite(selectedNote.id_catatan, !selectedNote.difavoritkan)}
        />
        <Button className="btn-edit"  onClick={() => handleEdit(selectedNote)}>
          Edit
        </Button>
        <Button className="btn-hapus"  onClick={() => handleDelete(selectedNote)}>
          Hapus
        </Button>
      </div>
      
    )}
    <div style={{ marginTop: '10px' }}>
    <Button className="btn-kategori" variant="secondary" onClick={() => handleKategoriNoteClick(selectedKategoriNote)}>
    {selectedFolderName !== null ? selectedFolderName : 'Belum Dikategorikan'} {/* Menampilkan nama folder atau default "Belum Dikategorikan" */}
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



<Modal className="modal-todo" show={showModalTodo} onHide={() => setShowModalTodo(false)} size="lg" centered>
  <Modal.Header closeButton></Modal.Header>
  <Modal.Body>
    <div>
      {selectedTodo && (
        <div className="hder">
          <FontAwesomeIcon
          className="icon-fav"
          icon={selectedTodo.difavoritkan === 1 ? solidHeart : regularHeart} // Menggunakan solidHeart jika difavoritkan, dan regularHeart jika tidak difavoritkan
          style={{ color: selectedTodo.difavoritkan === 1 ? 'red' : 'black' }}
          onClick={() => toggleFavoriteTodo(selectedTodo.id_todolist, !selectedTodo.difavoritkan)}
        />
          {/* Button Edit */}
          <Button className="btn-edit" onClick={() => handleTodoEdit(selectedTodo)}>
            Edit
          </Button>
          {/* Button Hapus */}
          <Button className="btn-hapus" onClick={() => handleDeleteTodolist(selectedTodo)}>
            Hapus
          </Button>
        </div>
      )}
      <div style={{ marginTop: '10px' }}>
        {/* Button untuk kategori belum dikategorikan */}
        <Button className="btn-kategori" variant="secondary" onClick={() => handleKategoriTodo(selectedKategoriTodo)}>
        {selectedFolderName !== null ? selectedFolderName : 'Belum Dikategorikan'} {/* Menampilkan nama folder atau default "Belum Dikategorikan" */}
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
                  onChange={() => handleCheckboxChange(task.id_tugas)}
                />
                <span style={{ marginLeft: '10px', textDecoration: task.completed ? 'line-through' : 'none' }}>
                  {task.tugas}
                </span>
                
              </li>
            ))}
          </ul>
          <p className="tanggal">Terakhir diubah: {formatDate(selectedTodo.date)}</p>
        </div>
      )}
    </div>
  </Modal.Body>
</Modal>




{/* Modal untuk Edit Catatan */}
<Modal
        className="modal-edit-note"
        show={showModalEditNote}
        onHide={() => setShowModalEditNote(false)}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Catatan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedEditNote && (
            <Form>
              <Form.Group controlId="editNoteTitle">
                
                <Form.Control
                className="input-jdlnote"
                  type="text"
                  value={catatanJudul}
                  // Handle perubahan judul catatan
                  
                  onChange={(e) => setcatatanJudul(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="editNoteContent">
                
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={catatanIsi}
                  // Handle perubahan konten catatan
                  onChange={(e) => setcatatanIsi(e.target.value)}
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-batal" variant="secondary" onClick={() => setShowModalEditNote(false)}>
            Batal
          </Button>
          <Button className="btn-simpan" variant="primary" onClick={handleSaveNoteChanges}>
            Simpan
          </Button>
        </Modal.Footer>
      </Modal>



      {/* Modal untuk Edit Daftar Tugas */}
      <Modal
        className="modal-edit-todo"
        show={showModalEditTodo}
        onHide={() => setShowModalEditTodo(false)}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Todolist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedEditTodo && (
            <Form>
              <Form.Group controlId="editTodoTitle">
                <Form.Control style={{ marginBottom: '30px' }}
                  type="text"
                  defaultValue={selectedEditTodo ? selectedEditTodo.judul_todolist : ''}
                  // Handle perubahan judul daftar tugas
                  onChange={(e) =>
                    setSelectedEditTodo({
                      ...selectedEditTodo,
                      judul_todolist: e.target.value,
                    })
                  }
                />
              </Form.Group>
              
              <ul style={{ listStyleType: 'none', padding: 0 }}>
            {selectedEditTodo.tugas.map((task, taskIndex) => (
              <li key={task.id_tugas}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleCheckboxChange(selectedEditTodo.id_todolist, task.id_tugas, taskIndex)}
                />
                <span style={{ marginLeft: '10px', textDecoration: task.completed ? 'line-through' : 'none' }}>
                  {task.tugas}
                </span>
                
              </li>
            ))}
          </ul>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-batal"variant="secondary" onClick={() => setShowModalEditTodo(false)}>
            Batal
          </Button>
          <Button className="btn-simpan" variant="primary" onClick={handleSaveTodoChanges}>
            Simpan Perubahan
          </Button>
        </Modal.Footer>
      </Modal>



      {/* Modal untuk menampilkan folder */}
    <Modal className="modal-kategori-note" show={showModalKategoriNote} onHide={() => setShowModalKategoriNote(false)} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Pilih Kategori</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="folder-list">
        <Button className="kategori"  onClick={() => handleUnKategoriNote()}>Belum Dikategorikan</Button>
          {folder.map((item) => (
             
            <Button className="kategori" key={item.id_folder} onClick={() => handleKategoriNote(item.id_folder)}>{item.nama_folder}</Button>
          ))}
        </div>
      </Modal.Body>
    </Modal>

    {/* Modal untuk menampilkan folder */}
    <Modal className="modal-kategori-todo" show={showModalKategoriTodo} onHide={() => setShowModalKategoriTodo(false)} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Pilih Kategori</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="folder-list">
        <Button className="kategori"  onClick={() => handleUnKategoriTodo()}>Belum Dikategorikan</Button>
          {folder.map((item) => (
             
            <Button className="kategori" key={item.id_folder} onClick={() => handleKategoriTodolist(item.id_folder)}>{item.nama_folder}</Button>
          ))}
        </div>
      </Modal.Body>
    </Modal>
</>
  );
};

export default Cards;
