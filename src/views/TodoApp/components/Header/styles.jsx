import styled from 'styled-components';
import bgDesktopDark from '../../../../assets/images/bg-desktop-dark.jpg';

export const StyledHeader = styled.header`
    background: url(${bgDesktopDark});
    height: 35%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const StyledHeaderTitle = styled.h1`
    color: white;
    margin: 0;
`;
