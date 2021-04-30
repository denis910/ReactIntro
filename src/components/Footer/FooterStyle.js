import styled from 'styled-components';
import {
    breakpoints,
    colors
} from '../../lib/style/theme';

export const Footer= styled.footer`
    background-color: ${colors.darkGrey};
    padding: 20px;

    @media  screen and (${breakpoints.tablet}) {
        padding: 30px;
    }
`;

export const Content= styled.div`
    display: inline-block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
`;

export const Text= styled.p`
    color: ${colors.lightGrey};
    font-size: 14px;

    @media  screen and (${breakpoints.tablet}) {
        font-size: 16px;
    }
`;
