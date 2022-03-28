import React from "react";
import styled from "styled-components";

const LinkWrapper = styled.li`
    padding: 8px 5px;
    font-size: 11px;
    font-weight: normal;
    text-align: center;
    &:hover {
        background: ${({ theme }) => theme.colors.darkBlue};
        a {
            color: ${({ theme }) => theme.colors.white};
        }
    }
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.black};
    }
`;

const DropdownLink = ({ children }) => {
    return (
        <LinkWrapper>
            <a href='/#'>{children}</a>
        </LinkWrapper>
    );
};

export default DropdownLink;
