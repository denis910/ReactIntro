import React, { useState, useContext } from 'react';
import LogoImage from '../../assets/images/logo.png';
import {
    HeaderWrapper,
    Inner,
    Logo,
    LogoContainer,
    Nav,
    NavItem,
    Hamburger,
    HamburgerLine,
    ButtonLogout
} from './HeaderStyle';

//Context
import { AuthContext } from '../../context/AuthContext';

const Header = () => {
    const[show, setShow] = useState(false);
    const {isLoggedIn, isAdmin, setIsAdmin, setIsLoggedIn} = useContext(AuthContext);

    const handleHamburger = () => {
        setShow(!show);
    }

    const setShowFalse = () => {
        setShow(false);
    }

    const setLoggedOut = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('isAdmin');
        setIsAdmin(false);
        setIsLoggedIn(false);
    }

    return(
        <HeaderWrapper showHamburger={show}>
            <Inner showHamburger={show}>
                <LogoContainer to="/" showHamburger={show}>
                    <Logo alt="logo FOI-ja" src={LogoImage}/>
                </LogoContainer>
                <Nav showHamburger={show}>
                    <NavItem to="/Home" onClick={setShowFalse}>Home</NavItem>
                    <NavItem to="/Events" onClick={setShowFalse}>Events</NavItem>
                    {isAdmin &&
                        <>
                            <NavItem to="/admin" onClick={setShowFalse}>Admin</NavItem>
                            <ButtonLogout onClick={setLoggedOut}>Logout</ButtonLogout>
                        </>
                    }
                    {!isAdmin && isLoggedIn &&
                        <ButtonLogout onClick={setLoggedOut}>Logout</ButtonLogout>
                    }
                    {!isLoggedIn &&
                        <>
                            <NavItem to="/Login" onClick={setShowFalse}>Login</NavItem>
                            <NavItem to="/Register" onClick={setShowFalse}>Register</NavItem>
                        </>
                    }
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