import React from 'react'
import Icon1 from '../../images/Org-Folder.svg'
import Icon2 from '../../images/FasMake.svg'
import Icon3 from '../../images/Multi.svg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './FiturElement'

const Services = () => {
  return (
    <ServicesContainer id='fitur'>
      <ServicesH1>Temukan Kemudahan dengan Fitur Kami</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Organisasi yang Efisien</ServicesH2>
          <ServicesP>Dengan kemampuan untuk mengelompokkan dan mengatur catatan, akan memastikan catatan tetap terorganisasi. Tidak perlu khawatir kehilangan catatan atau informasi penting.</ServicesP>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={Icon2}/>
          <ServicesH2>Buat Catatan dalam Sekejap</ServicesH2>
          <ServicesP>Kami memahami kebutuhan untuk mencatat informasi secepat mungkin. Dengan fitur pembuatan catatan baru, Anda dapat mencatat ide dan informasi penting tanpa hambatan</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Akses Dimana Saja, Kapan Saja</ServicesH2>
          <ServicesP>Akses catatan dengan mudah dan cepat dari berbagai perangkat, termasuk ponsel, tablet, dan komputer. Kerja cepat dengan catatan informasi penting di mana saja dan kapan saja.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services