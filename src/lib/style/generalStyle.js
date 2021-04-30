
import styled from 'styled-components';
import {
    colors, 
    breakpoints, 
    transitionEase
} from './theme';
import { Link } from 'react-router-dom';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export const Grid = styled.div`
    display: grid;
    row-gap: 32px;
    
    @media screen and (${breakpoints.mobileLarge}) {
        grid-template-columns: repeat(2, 1fr);
        column-gap: 32px;
    }

    @media screen and (${breakpoints.desktop}) {
        grid-template-columns: repeat(3, 1fr);
        ${props => props.columns === 3 && 
            'padding: 0 32px;'
        }
    }

    @media screen and (${breakpoints.desktopLarge}) {
        ${props => props.columns === 3 && 
            'padding: 0 84px;'
        }
    }
`;

export const Button = styled(Link)`
    display: block;
    text-decoration: none;
    width: 100%;
    line-height: 40px;
    text-align: center;
    border: 1px solid ${colors.red};
    border-radius: 6px;
    background: ${colors.red};
    color: ${colors.white};
    transition: ${transitionEase};
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;

    &:hover {
        cursor: pointer;
        border-color: ${colors.yellow};
        background:${colors.yellow};
    }

    &:focus {
        outline: none;
    }
`;

export const LoaderWrapper = styled(Loader)`
    display: flex;
    justify-content: center;
`;

export const SearchBar= styled.input`
    padding: 0 15px;
    margin-bottom: 40px;

    @media  screen and (${breakpoints.mobileLarge}) {
        max-width: 400px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        padding: 0;
    }

    @media  screen and (${breakpoints.tablet}) {
        border: 1px solid ${colors.lightGrey};
        border-radius: 6px;
        line-height: 40px;
        outline: none;
        font-size: 14px;

        &:focus{
            border-color: ${colors.yellow};
        }
    }

    @media  screen and (${breakpoints.desktop}) {
        font-size: 16px;
    }
`;
