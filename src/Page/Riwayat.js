import React from 'react'
import "./Riwayat.css"
import NavProf from '../komponen/NavBarP/NavProf'
import WebNavbar from '../komponen/NavBarD/WebNavbar'

import Histor from '../komponen/History/Histor'

const Riwayat = () => {
  return (
    <div>
      <WebNavbar/>
      <div className="riwayat">
        <div className="frame-2">
      <div className="title-prof">Riwayat</div>
    </div>
    </div>
      <Histor/>
    </div>
  )
}

export default Riwayat
