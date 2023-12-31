import React, {useState} from 'react'

import Info from '../komponen/Info/Info'
import { homeObjOne, homeObjTwo, homeObjThree} from '../komponen/Info/Data';
import Navbar from '../komponen/Navbar/Navbar'
import Services from '../komponen/Fitur/Fitur';
import Kontak from '../komponen/Kontak/Kontak';
import Sidebar from '../komponen/SideBar/SideBar'
import Footer from '../komponen/Footer/Footer';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      
      <Info {...homeObjOne}/>
    
      <Services />
      
      
      <Kontak />
      <Footer/>
    </>
  )
}

export default Home