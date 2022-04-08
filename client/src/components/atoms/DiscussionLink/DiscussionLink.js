import React from "react";
import styled from "styled-components";
import { DefaultLink } from "../DefaultLink/DefaultLink";

const Wrapper = styled.div`
    display: block;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.darkGray};
    line-height: 1.5;
    padding: 0.6rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;

const DiscussionLink = ({ item: { link, title, username, userLink } }) => {
    return (
        <Wrapper>
            <DefaultLink bold={true} href={link} target='_blank' rel='noreferrer'>
                {title}
            </DefaultLink>
            <div>
                by{" "}
                <DefaultLink href={userLink} target='_blank' rel='noreferrer'>
                    {username}
                </DefaultLink>
            </div>
        </Wrapper>
    );
};

export default DiscussionLink;
