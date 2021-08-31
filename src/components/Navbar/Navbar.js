import React, {useState, useEffect} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {Button} from '../../globalStyles'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
} from './Navbar.elements'
import {Link} from "react-router-dom";

const Navbar = (props) => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <>
            <IconContext.Provider value={{color: '#bd93f9'}}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/">
                            <NavIcon/>
                            Aisen Kim
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes/> : <FaBars/>}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks as={Link} to="/word-list">About Me</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks as={Link} to="/word-list">Personal Projects</NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
