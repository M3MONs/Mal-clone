import styled from "styled-components";
import { Container } from "@material-ui/core";

export const Wrapper = styled.nav`
    background-color: white;
    width: 100%;
    height: 50px;
`;

export const NavWrapper = styled(Container)`
    padding: 0px !important;
    && {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 36px;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const DropdownsWrapper = styled.div`
    display: flex;
`;
