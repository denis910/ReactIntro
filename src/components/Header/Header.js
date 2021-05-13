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
    HamburgerLine,
    ButtonLogout
} from './HeaderStyle';

const Header = (props) => {
    const[show, setShow] = useState(false);

    const handleHamburger = () => {
        setShow(!show);
    }

    const setShowFalse = () => {
        setShow(false);
    }

    const setLoggedOut = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('isAdmin');
        props.setIsAdmin(false);
        props.setIsLoggedIn(false);
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
                    {props.isAdmin &&
                        <>
                            <NavItem to="/admin" onClick={setShowFalse}>Admin</NavItem>
                            <ButtonLogout onClick={setLoggedOut}>Logout</ButtonLogout>
                        </>
                    }
                    {!props.isAdmin && props.isLoggedIn &&
                        <ButtonLogout onClick={setLoggedOut}>Logout</ButtonLogout>
                    }
                    {!props.isLoggedIn &&
                        <>
                            <NavItem to="/Login" onClick={setShowFalse}>Login</NavItem>
                            <NavItem to="/Register" onClick={setShowFalse}>Register</NavItem>
                            {console.log(props.isLoggedIn)}
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