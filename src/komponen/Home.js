import React from "react";
import { useState, useEffect } from "react";
import WebNavbar from "./WebNavbar";
import "./Home.css";
import image1 from "../aset/User.png";
import image2 from "../aset/Cari.png";
import image3 from "../aset/Love.png";
import image4 from "../aset/icon edit.png";

const Home = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      content: "Lorem ipsum dolor sit amet consectetur. Tellus magna purus dignissim velit in purus id.",
      date: "May 11, 2023",
      favorite: false,
    },
    {
      id: 2,
      content: "Lorem ipsum dolor sit amet consectetur. Sed tincidunt est id accumsan purus felis.",
      date: "May 11, 2023",
      favorite: true,
    },
    {
      id: 3,
      content: "Lorem ipsum dolor sit amet consectetur. Sed tincidunt est id accumsan purus felis.",
      date: "May 11, 2023",
      favorite: true,
    },
    {
      id: 4,
      content: "Lorem ipsum dolor sit amet consectetur. Sed tincidunt est id accumsan purus felis.",
      date: "May 11, 2023",
      favorite: false,
    },
    {
      id: 5,
      content: "Lorem ipsum dolor sit amet consectetur. Sed tincidunt est id accumsan purus felis.",
      date: "May 11, 2023",
      favorite: true,
    },
    {
      id: 6,
      content: "Lorem ipsum dolor sit amet consectetur. Sed tincidunt est id accumsan purus felis.",
      date: "May 11, 2023",
      favorite: false,
    },
    {
      id: 7,
      content: "Lorem ipsum dolor sit amet consectetur. Sed tincidunt est id accumsan purus felis.",
      date: "May 11, 2023",
      favorite: false,
    },
    // Tambahkan catatan lain di sini
  ]);
  // Menggunakan useEffect untuk menangani efek samping
  useEffect(() => {
    // Contoh efek samping: memuat data dari API atau sumber data lainnya
    // Misalnya, Anda bisa memuat data catatan dari server di sini
  }, []); // Kita tidak memiliki dependensi, ini akan berjalan sekali saat komponen dimuat

  return (
    <div>   
    <div className="home">
    <WebNavbar />
      <div className="home-me">
        <div className="konten-home">
            <div className="topsee">
            <div className="pencarian">
              <div className="group-pencarian">
                <img className="icon-cari" alt="Cari" src={image2} />
                <div className="text-cari">Cari apapun..</div>
              </div>
            </div>
            <div className="profile">
              <img className="user-img" alt="User" src={image1} />
              <div className="group-profile">
                <div className="text-user">Juan Jacob</div>
                <div className="text-email-user">juanjacob@gmail.com</div>
              </div>
            </div>
            </div>
            <div className="barr">
            <div className="all">
              <div className="text-all">All</div>
            </div>
            <div className="favorite">
              <div className="text-favorite">Favorite</div>
            </div>
            <div className="work">
              <div className="text-work">Work</div>
            </div>
          </div>
          <div className="konten-note">
          {notes.map((note) => (
                <div key={note.id} className="note">
                  <p className="note-content">{note.content}</p>
                  <div className="icon-love">
                  {note.favorite && <img className="love" alt="Love" src={image3} />}
                  </div>
                  <div className="date">{note.date}</div>
                  <img className="edit" alt="Edit" src={image4} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Home;