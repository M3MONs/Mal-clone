import React from "react";
import PropTypes from "prop-types";
import { LinksList } from "./Dropdown.style";
import DropdownLink from "components/atoms/DropdownLink/DropdownLink";

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
