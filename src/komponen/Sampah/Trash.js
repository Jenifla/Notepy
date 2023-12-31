// import React, { useState, useEffect } from 'react'
// import "./Trash.css";
// import image3 from "../../aset/Love.png";
// import image4 from "../../aset/icon edit.png";

// const Trash = () => {
//     const [notes, setNotes] = useState([
//         {
//           id: 1,
//           content: "Lorem ipsum dolor sit amet consectetur. Tellus magna purus dignissim velit in purus id.",
//           date: "May 11, 2023",
//           favorite: true,
//         },
//         {
//           id: 2,
//           content: "Lorem ipsum dolor sit amet consectetur. Sed tincidunt est id accumsan purus felis.",
//           date: "May 11, 2023",
//           favorite: false,
//         },
//         {
//             id: 3,
//             content: "Lorem ipsum dolor sit amet consectetur. Sed tincidunt est id accumsan purus felis.",
//             date: "May 11, 2023",
//             favorite: false,
//           },
        
//         // Tambahkan catatan lain di sini
//       ]);
//       // Menggunakan useEffect untuk menangani efek samping
//       useEffect(() => {
//         // Contoh efek samping: memuat data dari API atau sumber data lainnya
//         // Misalnya, Anda bisa memuat data catatan dari server di sini
//       }, []);
//   return (
//     <div>
//       <div className="sampah">
//         <div className="frame-2">
//       <div className="title-prof"> Sampah</div>
//     </div>
//     <div className="konten-note-sam">
//           {notes.map((note) => (
//                 <div key={note.id} className="note">
//                   <p className="note-content">{note.content}</p>
//                   <div className="icon-love">
//                   {note.favorite && <img className="love" alt="Love" src={image3} />}
//                   </div>
//                   <div className="date">{note.date}</div>
//                   <img className="edit" alt="Edit" src={image4} />
//                 </div>
//               ))}
//           </div>
//     </div>
//     </div>
//     )
// }

// export default Trash
