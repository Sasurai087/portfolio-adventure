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
  margin-top: -100px;
  color: rgb(16, 194, 194);
  font-size: 80px;

  @media screen and (max-width: 768px) {
    font-size: 50px;
    margin-top: -150px
  }

  @media screen and (max-width: 480px) {
    font-size: 50px;
    margin-top: -100px
  }
`;

export const HeroP = styled.p`
  margin-top: 8px;
  color: #fff;
  font-size: 60px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

  @media screen and (max-width: 768px) {
    font-size: 35px;
  }

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;

export const HeroButton = styled.div`
  margin-top: 32px;
`;

export const HeroButtonArrow = styled(ArrowRight)`
  margin-left: 8px;
  margin-bottom: 2px;
`
