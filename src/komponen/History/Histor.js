import React, { useState, useEffect } from 'react'
import "./Histor.css";
import { Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image3 from "../../aset/Love.png";
import image4 from "../../aset/icon edit.png";
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

const Histor = () => {
    const [notes, setNotes] = useState([
        {
          id: 1,
          content: "Lorem ipsum dolor sit amet consectetur. Tellus magna purus dignissim velit in purus id.",
          date: "May 11, 2023",
          favorite: true,
        },
        {
          id: 2,
          content: "Lorem ipsum dolor sit amet consectetur. Sed tincidunt est id accumsan purus felis.",
          date: "May 11, 2023",
          favorite: false,
        },
        {
            id: 3,
            content: "Lorem ipsum dolor sit amet consectetur. Sed tincidunt est id accumsan purus felis.",
            date: "May 11, 2023",
            favorite: false,
          },
          {
            id: 4,
            judul: "Century",
            content: "Lorem ipsum dolor sit amet consectetur. Sed tincidunt est id accumsan purus felis.",
            date: "May 11, 2023",
            favorite: false,
          },
          {
            id: 5,
            judul: "Century",
            content: "Lorem ipsum dolor sit amet consectetur. Sed tincidunt est id accumsan purus felis.",
            date: "May 11, 2023",
            favorite: true,
          },
          {
            id: 6,
            judul: "Century",
            content: "Lorem ipsum dolor sit amet consectetur. Sed tincidunt est id accumsan purus felis.",
            date: "May 11, 2023",
            favorite: false,
          },
          {
            id: 7,
            judul: "Century",
            content: "Lorem ipsum dolor sit amet consectetur. Sed tincidunt est id accumsan purus felis.",
            date: "May 11, 2023",
            favorite: false,
          },
          {
            id: 8,
            judul: "Century",
            content: "Lorem ipsum dolor sit amet consectetur. Sed tincidunt est id accumsan purus felis.",
            date: "May 11, 2023",
            favorite: false,
          },
          {
            id: 9,
            judul: "Century",
            content: "Lorem ipsum dolor sit amet consectetur. Sed tincidunt est id accumsan purus felis.",
            date: "May 11, 2023",
            favorite: false,
          },
          {
            id: 10,
            judul: "Century",
            content: "Lorem ipsum dolor sit amet consectetur. Sed tincidunt est id accumsan purus felis.",
            date: "May 11, 2023",
            favorite: false,
          },
          {
            id: 11,
            judul: "Century",
            content: "Lorem ipsum dolor sit amet consectetur. Sed tincidunt est id accumsan purus felis.",
            date: "May 11, 2023",
            favorite: false,
          },
        // Tambahkan catatan lain di sini
      ]);

      
  const [showModal, setShowModal] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  // Fungsi untuk menampilkan modal dan detail catatan terpilih
  const handleNoteClick = (note) => {
    setSelectedNote(note);
    setShowModal(true);
  };

  const handleEdit = (note) => {
    // Lakukan logika untuk mengedit catatan di sini
    console.log('Catatan akan diubah:', note);
  };

  // Fungsi untuk menangani tombol hapus
  const handleDelete = (note) => {
    // Lakukan logika untuk menghapus catatan di sini
    console.log('Catatan akan dihapus:', note);
  };

  // Fungsi untuk menangani tombol belum dikategorikan
  const handleUncategorized = (note) => {
    // Lakukan logika untuk catatan yang belum dikategorikan di sini
    console.log('Catatan belum dikategorikan:', note);
  };

      // Menggunakan useEffect untuk menangani efek samping
      useEffect(() => {
        // Contoh efek samping: memuat data dari API atau sumber data lainnya
        // Misalnya, Anda bisa memuat data catatan dari server di sini
      }, []);
  return (
    <div>
    <div className="konten-note-his">
          {notes.map((note) => (
                <div key={note.id} className="note" onClick={() => handleNoteClick(note)}>
                  <h3 className="note-title">{note.judul}</h3>
                  <p className="note-content">{note.content}</p>
                  <div className="icon-love">
                  {note.favorite && <img className="love" alt="Love" src={image3} />}
                  </div>
                  <div className="date">{note.date}</div>
                 
                </div>
              ))}
          </div>
          <Modal className="modal-history" show={showModal} onHide={() => setShowModal(false)}
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
        <Button className="btn-edit"  onClick={() => handleEdit(selectedNote)}>
          Edit
        </Button>
        <Button className="btn-hapus"  onClick={() => handleDelete(selectedNote)}>
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
        <p>{selectedNote.content}</p>
        <p className="tanggal">Terakhir diubah: {selectedNote.date}</p>
      </div>
    )}
  </div>
</Modal.Body>
</Modal>
    </div>
  )
}

export default Histor
