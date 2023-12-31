import React from 'react'

import { FaPhone, FaMapMarkerAlt, FaEnvelope} from 'react-icons/fa'
import {ServicesContainer, ServicesH1, ServicesWrapper, Column1, TextWrapper, ServicesIcon, ServicesContent, ServicesH2, ServicesP} from './KontakElement'


const Kontak = () => {
  return (
    <ServicesContainer id='kontak'>
      <ServicesH1>Mari Tetap Terhubung</ServicesH1>
      <ServicesWrapper>
        <Column1>
        <ServicesIcon> 
            <FaPhone size={30}/>
        </ServicesIcon>   
        <TextWrapper> 
          <ServicesH2>Hubungi Kami</ServicesH2>
          <ServicesP>+62-8749-333</ServicesP>
        </TextWrapper>
        </Column1>
        <Column1>
        <ServicesIcon> 
            <FaMapMarkerAlt size={30}/>
        </ServicesIcon> 
        <TextWrapper>
          <ServicesH2>Temukan Kami</ServicesH2>
          <ServicesP>Jl. Imam Bonjol, Sumbersoko, Pandean, Kec. Mejayan, Kabupaten Madiun, Jawa Timur 63153</ServicesP>
        </TextWrapper>
        </Column1>
        <Column1>
        <ServicesIcon> 
            <FaEnvelope size={30}/>
        </ServicesIcon> 
        <TextWrapper>
          <ServicesH2>Kirim Pesan</ServicesH2>
          <ServicesP>note.pyco@gmail.com</ServicesP>
        </TextWrapper>
        </Column1>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Kontak