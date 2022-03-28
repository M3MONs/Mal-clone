import React from "react";
import styled from "styled-components";
import { NavLink } from "components/atoms/NavLink/NavLink";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const LinkItems = [
    {
        name: "Login",
        ref: "#",
        filled: false,
    },
    {
        name: "Sign Up",
        ref: "#",
        filled: true,
    },
];

const NavLinks = () => {
    return (
        <Wrapper>
            {LinkItems.map((item) => (
                <NavLink href={item.ref} filled={item.filled}>
                    {item.name}
                </NavLink>
            ))}
        </Wrapper>
    );
};

export default NavLinks;
