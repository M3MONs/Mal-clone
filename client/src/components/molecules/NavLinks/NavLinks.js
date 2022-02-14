import React from "react";
import styled from "styled-components";
import { NavLink } from "components/atoms/NavLink/NavLink";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const NavLinks = () => {
    return (
        <Wrapper>
            <NavLink href='#'>Login</NavLink>
            <NavLink href='#' filled>
                Sign Up
            </NavLink>
        </Wrapper>
    );
};

export default NavLinks;
