
import styled, {css} from 'styled-components';
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

        ${props => props.columns === 2 && 
            'grid-template-columns: repeat(2, 1fr);'
        }
    }

    @media screen and (${breakpoints.desktop}) {
        grid-template-columns: repeat(3, 1fr);
        ${props => props.columns === 3 && 
            'padding: 0 32px;'
        }

        ${props => props.columns === 2 && 
            'grid-template-columns: repeat(2, 1fr);'
        }
    }

    @media screen and (${breakpoints.desktopLarge}) {
        ${props => props.columns === 3 && 
            'padding: 0 84px;'
        }

        ${props => props.columns === 2 && 
            'grid-template-columns: repeat(2, 1fr);'
        }
    }
`;

export const ButtonDefault = css`
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

export const Button = styled(Link)`
    ${ButtonDefault}
`;

export const ButtonSubmit = styled.button`
    ${ButtonDefault}
`;

export const ButtonEvent = styled.button`
    ${ButtonDefault};
    background-color: ${colors.white};
    border-color: ${colors.black};
    color: ${colors.black};
    font-weight: 600;
    width: 200px;
    height: 44px;
    margin-bottom: 20px;

    media screen and (${breakpoints.mobileLarge}) {
        margin:auto;
    }

    &:hover{
        background-color: ${colors.white};
        color: ${colors.green};
        border-color: ${colors.green};
    }

`;

export const ButtonExit = styled.button`
    border-style: none;
    background-color: initial;
    float: right;
    font-size: 20px;

    &:hover{
        cursor: pointer;
    }
`;

export const Title= styled.h1`
    text-align: center;
    font-size: 20px;
    margin-bottom: 32px;

    @media  screen and (${breakpoints.mobileLarge}) {
        font-size: 24px;
    }

    @media  screen and (${breakpoints.tablet}) {
        margin-bottom: 48px;
    }

    @media  screen and (${breakpoints.desktop}) {
        font-size: 28px;
    }

    @media  screen and (${breakpoints.desktopLarge}) {
        font-size: 32px;
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

export const Form= styled.form`
    width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;

    @media  screen and (${breakpoints.mobileLarge}) {
        width: 400px;
    }
`;

export const FormRow= styled.div`
    margin-bottom: 32px;

    &:last-child{
        margin-bottom: 0;
    }
`;

export const CheckboxWrapper= styled.div`
    display: flex;
    align-items: center;
`;

export const InputLabel= styled.label`
    display: block;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 4px;

    ${props => props.isCheckbox &&`
        margin-bottom: 0;
    `}

    @media  screen and (${breakpoints.desktop}) {
        font-size: 16px;
    }
`;

export const InputDefault= css`
    border: 1px solid ${colors.lightGrey};
    border-radius: 6px;
    width: 100%;
    line-height: 40px;
    padding: 0 10px;
    outline: none;
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;

    &:focus{
        border-color: ${colors.yellow};
    }

    @media  screen and (${breakpoints.desktop}) {
        font-size: 16px;
    }
`;

export const InputText= styled.input`
    ${InputDefault};
`;

export const Select= styled.select`
    ${InputDefault};
    height:40px; 
`;

export const Option= styled.option`
    background-color: ${colors.blackOverlay};
    color: ${colors.white}
`;

export const TextArea= styled.textarea`
    border: 1px solid ${colors.lightGrey};
    border-radius: 6px;
    width: 100%;
    line-height: 150%;
    padding: 10px;
    outline: none;
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
    min-width: 100%;

    &:focus{
        border-color: ${colors.yellow};
    }

    @media  screen and (${breakpoints.desktop}) {
        font-size: 16px;
    }
`;

export const InputCheckbox= styled.input`
    margin-right: 12px;
    width: 18px;
    height: 18px;
`;

export const InputError= styled.p`
    font-size: 14px;
    color: ${colors.red};
    padding-top: 8px;
`;

export const SuccessMessage = styled.p`
    margin: 0 auto;
    padding: 15px;
    margin-bottom: 32px;
    border-radius: 6px;
    background: ${colors.successBackground};
    color: ${colors.success};
    ${props => props.isError && `
        background: ${colors.errorBackground};
        color: ${colors.error};
    `};
    @media screen and (${breakpoints.mobileLarge}){
        max-width: 400px;
    }
`;