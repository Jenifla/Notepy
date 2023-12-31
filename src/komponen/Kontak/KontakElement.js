import styled from 'styled-components';

export const ServicesContainer = styled.div`
  height: 610px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Inknut Antiqua', serif;
  align-items: center;
  background-image: url('/images/bgr.png');;

  @media screen and (max-width: 768px) {
    height: 600px;
  }

  @media screen and (max-width: 480px) {
    height: 600px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 10px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 786px) {
    grid-template-columns: 1fr;
    height: 600px;
    padding: 0 10px;
  }
`;

export const Column1 = styled.div`
  display: flex;
  flex-direction: row; /* Ikon berada di sebelah kiri */
  justify-content: flex-start;
  align-items: center;
  max-height: 40px;
  padding: 60px;
  
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor:pointer;
  }
`;

export const TextWrapper = styled.div`
display: flex;
max-width: 200px; 
  flex-direction: column;
`;

export const ServicesIcon = styled.div`
  height: 70px;
  width: 60px;
  flex-direction:start;
  margin-right: 20px; /* Jarak antara ikon dan teks */
`;

export const ServicesH1 = styled.h1`
  font-size: 1.5rem;
  color: #000;
  text-align: center;
  margin-bottom: 80px;
 

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 0;
  }
`;



export const ServicesH2 = styled.h2`
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 13px;
`;

export const ServicesP = styled.p`
  font-size: 0.7rem;
  
`;

