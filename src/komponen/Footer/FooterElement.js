import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer`
  background-color: #EAD7BB;
  font-family: 'Inknut Antiqua', serif;
`

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`
export const FooterLinkContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`

export const FooterLinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`
export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 16px;
  
  width: 180px;
  box-sizing: border-box;
  color: #000;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`
export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
  
  
`
export const FooterLink = styled(Link)`
  color: #000;
  text-decoration: none;
  justify-content: center;
  margin-bottom: 0.5rem;
  font-size: 0.7rem;
  text-align: left;

  &:hover {
    color: #FD8226;
    transition: 0.3s ease-in-out;
  }
`

export const FooterLinkNav = styled(Link)`
  color: #000;
  text-decoration: none;
  justify-content: center;
  margin-bottom: 0.5rem;
  font-size: 0.7rem;
  text-align: center;

  &:hover {
    color: #FD8226;
    transition: 0.3s ease-in-out;
  }
`
export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

export const FooterLogo = styled(Link)`
  color: #000;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  margin-right: 30px;
  font-weight: regular;
`
export const WebsiteRights = styled.small`
  color: #000;
  margin-bottom: 16px;
  font-size: 0.7rem;
`
export const SocialIcons = styled.div`
  display: flex;
  flex-direction:row;
  gap: 30px;
  justify-content: center;
  align-items: center;
  width: 240px;
`
export const SocialIconLink = styled.a`
  color: #000;
  font-size: 30px;
`