import styled from "styled-components";
import { Link } from "react-scroll";
import {ReactLogo} from "@styled-icons/fa-brands/ReactLogo"
import {Bars} from "@styled-icons/fa-solid/Bars"


export const NavbarStyled = styled.nav`
  background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
  height: 80px;
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  max-width: 1500px;
`;

export const NavbarLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  margin-left: 10px;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const NavbarBrand = styled(ReactLogo)`
  margin-right: -0.5rem;
  color: white;
`;

export const NavbarMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  width: 60vw;
  justify-content: end;
  margin-right: 2rem;

  &:active {
    background: #242222;
    left: 0;
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 1;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 80px;
    left: -100%;
    opacity: 1;
    transition: all 0.5s ease;
  }
`;

export const NavbarMenuIcon = styled(Bars)`
display: none;

  @media screen and (max-width: 768px) {
    color: white;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    cursor: pointer;
  }
`;

export const NavbarLinks = styled(Link)`
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  &:hover {
    border-bottom: 4px solid #fff;
    transition: all 0.2s ease-out;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
  }
`;

