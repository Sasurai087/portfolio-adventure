import styled from 'styled-components';
import {ArrowRight} from '@styled-icons/fa-solid/ArrowRight';

export const HeroStyled = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  object-fit: contain;
`;

export const HeroVideo = styled.video`
  object-fit: cover;
  position: fixed;
  z-index: -1;
`

export const HeroH1 = styled.h1`
  color: #fff;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  margin-top: -6.25rem;
  color: rgb(16, 194, 194);
  font-size: 5rem;

  @media screen and (max-width: 768px) {
    font-size: 3.125rem;
    margin-top: -9.375rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 3.125rem;
    margin-top: -6.25rem;
  }
`;

export const HeroP = styled.p`
  margin-top: 0.5rem;
  color: #fff;
  font-size: 3.75rem;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

  @media screen and (max-width: 768px) {
    font-size: 2.1875rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.875rem;
  }
`;

export const HeroButton = styled.div`
  margin-top: 2rem;
`;

export const HeroButtonArrow = styled(ArrowRight)`
  margin-left: 0.5rem;
  margin-bottom: 0.125rem;
`
