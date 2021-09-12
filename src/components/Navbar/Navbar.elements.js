import styled from 'styled-components'
import { SiAngularjs } from 'react-icons/all'
import { Link } from 'react-router-dom'
import { StyledContainer } from '../../globalStyles'
import { FaBars, FaTimes } from 'react-icons/fa'

export const Nav = styled.nav`
  /* background: #282a36; */
  background: #44475a;
  height: 90px;
  /* height: 140px; */
  display: flex;
  justify-content: center;
  font-size: 1.1rem;
  position: sticky;
  top: 0;
  z-index: 999;

  @media screen and (max-width: 1280px) {
    font-size: 1.2rem;
  }
`

export const NavbarContainer = styled(StyledContainer)`
  display: flex;
  justify-content: space-between;
  height: 90px;
  background: #44475a;

  ${StyledContainer}
`

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  background: #44475a;

  &:hover {
    //color: #4b59f7;
    color: #f1fa8c;
    transition: all 0.3s ease;
  }
`

export const NavIcon = styled(SiAngularjs)`
  margin-right: 0.5rem;
  background: #44475a;
`

export const XIcon = styled(FaTimes)`
  margin-right: 0.5rem;
  background: #44475a;
`

export const BarIcon = styled(FaBars)`
  margin-right: 0.5rem;
  background: #44475a;
`

export const MobileIcon = styled.div`
  display: none;
  background: #44475a;

  @media screen and (max-width: 1280px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  background: #44475a;
  height: 100%;

  @media screen and (max-width: 1280px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #44475a;
  }
`

export const NavItem = styled.li`
  /* height: 70px; */
  border-bottom: 2px solid transparent;
  align-items: center;
  background: #44475a;
  height: 100%auto;

  &:hover {
    //border-bottom: 2px solid #4b59f7;
    border-bottom: 2px solid #f1fa8c;
  }

  @media screen and (max-width: 1280px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`

export const NavLinks = styled(Link)`
  /* color: #50fa7b; */
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  background: #44475a;

  &:hover {
    //color: #4b59f7;
    color: #f1fa8c;
    transition: all 0.3s ease;
  }

  @media screen and (max-width: 1280px) {
    text-align: center;
    padding: 1.6rem;
    width: 100%;
    display: table;

    &:hover {
      //color: #4b59f7;
      color: #f1fa8c;
      transition: all 0.3s ease;
    }
  }
`
