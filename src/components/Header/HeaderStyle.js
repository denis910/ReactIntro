import styled, {css} from 'styled-components';
import {
    colors, 
    breakpoints,
    transitionEase
} from '../../lib/style/theme';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
    background-color: ${colors.white};
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    ${props => props.showHamburger === true &&
       'height: 100%;'
    }
`;

export const Inner = styled.div`
    height: 100%;
    padding: 15px;
    display: flex;
    justify-content: space-between;

    ${props => props.showHamburger === false &&
       'align-items: center;'
    }

    @media  screen and (${breakpoints.tablet}) {
        padding: 15px 25px;
    }

    @media  screen and (${breakpoints.desktop}) {
        padding: 15px 0;
        max-width: 993px;
        margin: 0 auto;
    }

    @media  screen and (${breakpoints.desktopLarge}) {
        max-width: 1280px;
    }
`;

export const LogoContainer = styled(Link)`
    display: block;
    width: 50px;

    ${props => props.showHamburger === true &&
       'align-self:start;'
    }

    @media  screen and (${breakpoints.desktopLarge}) {
        width: 60px;
    }
`;

export const Logo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

export const Nav = styled.nav`
    display: none;

    ${props => props.showHamburger === true &&`
        display: flex;
        flex-direction: column;
        margin-top:50px;
    `}

    @media  screen and (${breakpoints.desktop}) {
        display: block;
    }
`;

export const NavigationItem = css`
    display: inline-block;
    text-decoration: none;
    color: ${colors.black};
    line-height: 50px;
    font-weight: 600;
    font-size: 16px;
    margin: 15px 0;
    margin-right: 60px;
    transition: ${transitionEase};
    font-size: 18px;

    &:hover {
        color: ${colors.red};
    }

    &:last-child {
        margin-right: 0;
    }
`;

export const NavItem = styled(Link)`
    ${NavigationItem}
`;

export const ButtonLogout = styled.button`
    ${NavigationItem};
    border: none;
    background-color: inherit;
    font-family: 'Montserrat', sans-serif;

    &:hover {
        cursor: pointer;
    }
`;

export const Hamburger = styled.div`
    width: 25px;

    @media  screen and (${breakpoints.desktop}) {
        display: none;
    }
`;

export const HamburgerLine = styled.div`
    width: 100%;
    height: 2px;
    border-radius: 100px;
    background-color: ${colors.darkGrey};
    margin-bottom: 6px;

    &:last-child {
            margin-bottom: 0;
    }

    @media  screen and (${breakpoints.desktop}) {
        display: none;
    }
`;
