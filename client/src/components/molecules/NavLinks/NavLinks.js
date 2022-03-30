import React from "react";
import styled from "styled-components";
import { NavLink } from "components/atoms/NavLink/NavLink";
import { LinkItems } from "./data/LinkItems";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

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
