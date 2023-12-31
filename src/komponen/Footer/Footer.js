import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinkWrapper, FooterLinkItems, FooterLinkContainer, FooterLinkTitle, FooterLink, FooterLinkNav, SocialIconLink, SocialIcons, FooterLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElement'
import { animateScroll as scroll } from 'react-scroll';
import logo from "../../images/logo.png"

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinkWrapper>
          <FooterLogo to='/' onClick={toggleHome}>
          <img src={logo} alt="Nama Logo" />
            Notepy</FooterLogo>
            
           
            <FooterLinkItems>
              <FooterLinkTitle></FooterLinkTitle>
                <FooterLinkNav to='/'>Beranda</FooterLinkNav>
                <FooterLinkNav to='/'>Fitur</FooterLinkNav>
                <FooterLinkNav to='/'>Kontak</FooterLinkNav>
                
            </FooterLinkItems>
          </FooterLinkWrapper>

          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle></FooterLinkTitle>
                <FooterLink to='/'>Jl. Imam Bonjol, Sumbersoko, Pandean, Kec. Mejayan, Kabupaten Madiun, Jawa Timur 63153</FooterLink>
                <FooterLink to='/'>+62-8749-333</FooterLink>
                <FooterLink to='/'>note.pyco@gmail.com</FooterLink>
            </FooterLinkItems>
            <SocialIcons>
            <SocialIconLink href='//www.instagram.com/leonardtcomdt/' target='_blank' arial-label='Instagram'>
                <FaInstagram/>
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' arial-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='//www.youtube.com/channel/UCF6Cz50AqAJcg6JC5LDRElg/videos?view_as=subscriber' target='_blank' arial-label='Youtube'>
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' arial-label='Twitter'>
                <FaTwitter/>
              </SocialIconLink>
              
            </SocialIcons>
           
          </FooterLinkWrapper>
        </FooterLinkContainer>
        <SocialMedia>
          <SocialMediaWrap>
            
            <WebsiteRights>Copyright © {new Date().getFullYear()} Notepy. All rights reserved.</WebsiteRights>
            
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
