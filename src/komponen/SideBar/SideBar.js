import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from './SidebarElement'

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='beranda' onClick={toggle}>Beranda</SidebarLink>
          <SidebarLink to='fitur' onClick={toggle}>Fitur</SidebarLink>
          <SidebarLink to='kontak' onClick={toggle}>Kontak</SidebarLink>
          <SideBtnWrap>
          <SidebarRoute to='/signin'>Masuk</SidebarRoute>
          </SideBtnWrap>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar