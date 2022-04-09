import React from "react";
import { Wrapper, NavWrapper } from "./NavBar.style";
import NavLinks from "components/molecules/NavLinks/NavLinks";
import Logo from "components/atoms/Logo/Logo";

const Wrapper = styled.nav`
    background-color: white;
    width: 100%;
    height: 50px;
`;

const NavWrapper = styled(Container)`
    padding: 0 !important;
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
