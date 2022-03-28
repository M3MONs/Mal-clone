import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import DropdownLink from "components/atoms/DropdownLink/DropdownLink";

const LinksList = styled.ul`
    background-color: ${({ theme }) => theme.colors.darkBlue};
    display: flex;
    flex-direction: column;
    position: absolute;
    min-width: 60px;
`;

const DropdownLinks = ({ links }) => {
    return (
        <LinksList>
            {links.map((link, i) => (
                <DropdownLink key={i}>{link.name}</DropdownLink>
            ))}
        </LinksList>
    );
};

DropdownLinks.propTypes = { links: PropTypes.array };

export default DropdownLinks;
