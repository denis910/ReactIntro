import React, { useState } from 'react';
import LogoImage from '../../assets/images/logo.png';
import {
    HeaderWrapper,
    Inner,
    Logo,
    LogoContainer,
    Nav,
    NavItem,
    Hamburger,
    HamburgerLine
} from './HeaderStyle';

const Header = () => {
    const[show, setShow] = useState(false);

    const handleHamburger = () => {
        setShow(!show);
    }

    const setShowFalse = () => {
        setShow(false);
    }

    return(
        <HeaderWrapper showHamburger={show}>
            <Inner showHamburger={show}>
                <LogoContainer to="/" showHamburger={show}>
                    <Logo alt="logo FOI-ja" src={LogoImage}/>
                </LogoContainer>
                <Nav showHamburger={show}>
                    <NavItem to="/Home" onClick={setShowFalse}>Home</NavItem>
                    <NavItem to="/Login" onClick={setShowFalse}>Login</NavItem>
                    <NavItem to="/Register" onClick={setShowFalse}>Register</NavItem>
                    <NavItem to="/admin" onClick={setShowFalse}>Admin</NavItem>
                    <NavItem to="/Events" onClick={setShowFalse}>Events</NavItem>
                </Nav>
                <Hamburger onClick={handleHamburger}>
                    <HamburgerLine/>
                    <HamburgerLine/>
                    <HamburgerLine/>
                </Hamburger>
            </Inner>
        </HeaderWrapper>
    );
}

export default Header;