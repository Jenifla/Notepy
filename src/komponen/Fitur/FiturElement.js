import styled from 'styled-components'

export const ServicesContainer = styled.div`
  height: 910px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Inknut Antiqua', serif;
  align-items: center;
  background: #F2E6D5;

  @media screen and (max-width: 768px) {
    height: 1300px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
 `
export const ServicesWrapper = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 19px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
      grid-template-columns: 1fr 1fr;
  }

    @media screen and (max-width: 786px) {
      grid-template-columns: 1fr;
      padding: 0 20px;
  }
`
export const ServicesCard = styled.div`
  background: rgba(255, 255, 255, 0.40);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 20px;
  border: 3px solid #FFF;
  max-height: 450px;
  padding:  30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor:pointer;
  }
`
export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;

`
export const ServicesH1 = styled.h1`
  font-size: 1.5rem;
  color: #000;
  text-align: center;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }  
`
export const ServicesH2 = styled.h2`
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 10px;
`

export const ServicesP = styled.p`
  font-size: 0.8rem;
  text-align: center;
`