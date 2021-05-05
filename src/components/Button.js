import styled from 'styled-components';
import {Link} from 'react-scroll';

export const Button = styled(Link)`
  background:transparent;
  padding: 0.75rem 1.875rem;
  outline: #1c1b1b solid 0.1rem;
  color: #fff;
  font-size: 1.1rem;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.4s ease-in-out;
  &:hover {
    transition: all 0.4s ease-in-out;
    background: white;
    color: black;
  }
`