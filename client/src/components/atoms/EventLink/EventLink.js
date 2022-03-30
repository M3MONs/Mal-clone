import React from "react";
import styled from "styled-components";

// Atom dla widgetu: MALxJapan -More than just anime-

const Wrapper = styled.div`
    width: 245px;
    margin-top: 5px;
    a {
        text-decoration: none;
    }
    img {
        width: 245px;
        height: 146px;
    }
    div {
        max-width: 253px;
        font-weight: bold;
        font-size: 12px;
        margin-top: 5px;
        color: ${({ theme }) => theme.colors.linkBlue};
    }
`;

const EventLink = ({ img, title, link = "/#" }) => {
    return (
        <Wrapper>
            <a href={link}>
                <img src={img} alt='' />
                <div>{title}</div>
            </a>
        </Wrapper>
    );
};

export default EventLink;
