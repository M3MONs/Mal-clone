import React from "react";
import { Wrapper, NavWrapper } from "./NavBar.style";
import NavLinks from "components/molecules/NavLinks/NavLinks";
import Logo from "components/atoms/Logo/Logo";

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
