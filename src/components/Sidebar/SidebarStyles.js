import styled from 'styled-components';
import {Times} from '@styled-icons/fa-solid/Times';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  transition: 0.5s ease-in-out;

  //styled-component will detect if variable 'isOpen' is true or not, and apply CSS changes accordingly
  opacity: ${({isOpen}) => (isOpen ? '100%' : '0') };
  top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(Times)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 100px);
  text-align: center;

  @media screen and (max-width: 480px){
    grid-template-rows: repeat(6, 60px)
  }
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #24ffe2;
    transition: 0.2s ease-in-out
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SideBtn = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  border:none;
  outline: none;
  cursor: pointer;
  transition: all 0.2 ease-ease-in-out;
  text-decoration: none;
  font-size: 16px;

  &:hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;

  }
`;