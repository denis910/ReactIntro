import styled from 'styled-components';
import {
    colors, 
    breakpoints, 
    boxShadowHover
} from '../../lib/style/theme';

export const TableContainer= styled.table`
    border-spacing: 0;
    border-radius: 6px;
    width: 100%;
    box-shadow: ${boxShadowHover};
`;

export const TableHead= styled.thead`

`;

export const TableBody= styled.tbody`
    border-radius: 6px;
`;

export const Header= styled.th`
    padding: 8px;
    text-align: left;
    background-color: ${colors.red};
    color: ${colors.white};

    &:first-child{
        border-radius: 6px 0 0 0;
    }

    &:last-child{
        border-radius: 0 6px 0 0;
    }



    ${props => (props.column === 3 || props.column === 4 || props.column === 5 || props.column === 6 || props.column === 7) && 
        `display:none;`
    }

    @media screen and (${breakpoints.mobileLarge}) {
        ${props => (props.column === 3 || props.column === 7) && 
            `display:table-cell;`
        }
    }

    @media screen and (${breakpoints.tablet}) {
        ${props => (props.column === 4 || props.column === 5 || props.column === 6) && 
            `display:table-cell;`
        }
    }
`;

export const Row= styled.tr`

    &:nth-child(even){
        background-color: ${colors.tableEvenGray};
    }

    &:hover{
        background-color: ${colors.tableHoverGray};
    }
`;

export const Cell= styled.td`
    padding: 12px;

    tr:last-child > &:last-child{
        border-radius: 0 0 6px 0;
    }

    tr:last-child > &:first-child{
        border-radius: 0 0 0 6px;
    }
    
    ${props => (props.column === 3 || props.column === 4 || props.column === 5 || props.column === 6 || props.column === 7) && 
        `display:none;`
    }

    @media screen and (${breakpoints.mobileLarge}) {
        ${props => (props.column === 3 || props.column === 7) && 
            `display:table-cell;`
        }
    }

    @media screen and (${breakpoints.tablet}) {
        ${props => (props.column === 4 || props.column === 5 || props.column === 6) && 
            `display:table-cell;`
        }
    }
`;

export const NoEventMessage= styled.p`
    text-align: center;
`;