import React from 'react'
import NavProf from '../komponen/NavBarP/NavProf'
import WebNavbar from '../komponen/NavBarD/WebNavbar'
import Card from '../komponen/Card/Card'
import '../komponen/Sampah/Trash.css'

const Sampah = () => {
  return (
    <div>
      <WebNavbar/>
      <div className="sampah">
        <div className="frame-2">
      <div className="title-prof"> Sampah</div>
    </div>
    
    </div>
    <Card/>
    </div>
  )
}

export default Sampah
