import React from "react";
import styled from "styled-components";
import { Container } from "@material-ui/core";
import NavLinks from "components/molecules/NavLinks/NavLinks";
import Logo from "components/atoms/Logo/Logo";

const Wrapper = styled.nav`
    background-color: white;
    width: 100%;
    height: 50px;
`;

const NavWrapper = styled(Container)`
    && {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

const NavBar = () => {
    return (
        <Wrapper>
            <NavWrapper>
                <Logo />
                <NavLinks />
            </NavWrapper>
        </Wrapper>
    );
};

export default NavBar;
