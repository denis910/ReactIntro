import styled from 'styled-components';
import {
    colors, 
    breakpoints, 
    boxShadow
} from '../../lib/style/theme';

export const ModalForm= styled.div`
    overflow: auto;
    position: fixed;
    top: 0;
    left: 5%;
    width: 90%;
    height: 100%;
    padding: 2.5em 1.5em 1.5em 1.5em;
    background-color: ${colors.white};
    -webkit-overflow-scrolling: touch;
    boxShadow: ${boxShadow};
    z-index:1001;

    @media screen and (${breakpoints.mobileLarge}) {
        left: 50%;
        top: 50%;
        height: auto;
        transform: translate(-50%, -50%);
        max-width: 30em;
        max-height: calc(100% - 1em);
    }
`;

export const ModalContainer= styled.div`
    background-color:${colors.blackOverlay};
    position:fixed;
    width:100%;
    height:100%;
    top:0px;
    left:0px;
    z-index:1000;
`;

export const Title= styled.h1`
    text-align: left;
    font-size: 24px;
    margin-bottom: 32px;
    color: ${colors.red}
`;