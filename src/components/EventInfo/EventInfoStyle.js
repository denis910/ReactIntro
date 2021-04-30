import styled from 'styled-components';
import {
    breakpoints
} from '../../lib/style/theme';

export const EventInfo= styled.div`
    padding: 0 15px 65px;

    @media screen and (${breakpoints.tablet}) {
        padding: 0 25px 65px;
    }

    @media screen and (${breakpoints.desktop}) {
        margin: 0 auto;
        padding: 0 0 64px;
        max-width: 930px;
    }

    @media screen and (${breakpoints.desktopLarge}) {
        max-width: 1280px;
    }
`;

export const Figure= styled.figure`
    width: 100%;
    height: 230px;

    @media screen and (min-width: 500px) {
        height: 300px;
    }

    @media screen and (${breakpoints.tablet}) {
        height: 230px;
        width: 350px;
    }

    @media screen and (${breakpoints.desktop}) {
        height: 350px;
        width: 600px;
    }

    @media screen and (${breakpoints.desktopLarge}) {
        height: 450px;
        width: 800px;
    }
`;

export const Image= styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Description= styled.p`
    font-size: 14px;
    line-height: 150%;

    @media screen and (${breakpoints.desktop}) {
        width: 600px;
        font-size: 16px;
    }

    @media screen and (${breakpoints.desktopLarge}) {
        width: 800px;
    }
`;

export const Content= styled.div`
    margin-bottom: 24px;

    @media screen and (${breakpoints.tablet}) {
        display: flex;
        justify-content: space-between;
    }
`;
