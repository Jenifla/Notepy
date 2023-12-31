import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonLink = styled(Link)`
  border-radius: 30px;
  background: ${({primary}) => (primary ?  '#B96262;' : '#B96262;')};
  white-space: nowrap;
  padding: ${({big}) =>  (big ? '14px  48px' : '12px 50px')};
  color: ${({dark}) =>  (dark ? '#010606' : '#fff')};
  font-size:${({fontBig}) =>  (fontBig ? '20px' : '16px')};
  outline: none;
  text-decoration: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ?  '#000' : '#A16464')};

  }
`