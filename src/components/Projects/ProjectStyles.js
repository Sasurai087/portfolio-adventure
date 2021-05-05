import styled from 'styled-components';
import {Link} from 'react-scroll';

//CSS for Projects page (see below for individual items)
export const ProjectsStyled = styled.section`
  padding: 3rem;
  background: #fff;
`;

export const ProjectsH1 = styled.h1`
  margin-top: 3rem;
  color: #444649;
  font-family: 'Trebuchet MS','Lucida Sans Unicode','Lucida Grande','Lucida Sans',Arial,sans-serif;
  font-size: 4rem;
  text-align: center;
  margin-bottom: 3rem;

  @media screen and (max-width: 768px) {
   font-size: 3rem;
  }
`;

export const ProjectsContainer = styled.div`
  max-width: 80vw;
  margin: 0 auto;
  display: grid;
  grid-gap: 10px;
  /* Items separated into 3 columns */
  grid-template-columns: 1fr 1fr 1fr;

  /* Down to 2 columns on smaller screen */
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  /* Only 1 item showing on smaller screens */
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

//CSS for individual items
export const ItemStyled = styled.div`
  margin: 0 0.5rem;
  border-radius: 10px;
`;

export const ItemCard = styled(Link)`
display: flex;
flex-flow: column;
box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
-webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
border-radius: 10px;
overflow: hidden;
text-decoration: none;
`;

export const ItemLabel = styled.figure`
  position: relative;
  width: 100%;
  padding-top: 67%;
  overflow: hidden;

  &:after{
    content: attr(data-category);
    position: absolute;
    bottom: 0;
    margin-left: 10px;
    padding: 6px 8px;
    font-size: .75rem;
    font-weight: 700;
    color: #fff;
    background-color: #1f98f4;
    box-sizing: border-box;
  }

  @media screen and (max-width: 768px) {
   &:after{
     font-size: 1.2rem;
   }
  }
`;

export const ItemImage = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all 0.2s linear;

  &:hover{
    transform: scale(1.1);
  }
`;

export const ItemInfo = styled.div`
  padding: 20px 30px 30px;
`;

export const ItemH4 = styled.h4`
  color: #1b8bb8;
  font-size: 1.3rem;
  line-height: 24px;
`;

export const ItemH5 = styled.h5`
  color: #41444d;
  font-size: 1rem;
`;

