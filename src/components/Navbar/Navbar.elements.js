import styled from 'styled-components'
import {GiVampireDracula} from "react-icons/all";
import {Link} from 'react-router-dom'
import {StyledContainer} from '../../globalStyles'


export const Nav = styled.nav`
  background: #282a36;
  height: 90px;
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

  ${StyledContainer}
`

export const NavLogo = styled(Link)`
  color: #8be9fd;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;

  &:hover {
    //color: #4b59f7;
    color: #f1fa8c;
    transition: all 0.3s ease;
  }
`

export const NavIcon = styled(GiVampireDracula)`
  margin-right: 0.5rem;
`

export const MobileIcon = styled.div`
  display: none;

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

  @media screen and (max-width: 1280px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({click}) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #282a36;
  }
 `

export const NavItem = styled.li`
  height: 70px;
  border-bottom: 2px solid transparent;

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
  color: #50fa7b;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  &:hover {
    //color: #4b59f7;
    color: #f1fa8c;
    transition: all 0.3s ease;
  }

  @media screen and (max-width: 1280px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      //color: #4b59f7;
      color: #f1fa8c;
      transition: all 0.3s ease;
    }
  }
`

