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
