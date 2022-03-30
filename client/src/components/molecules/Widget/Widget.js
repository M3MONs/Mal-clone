import React from "react";
import styled from "styled-components";

const Wrapper = styled.article`
    margin: 0 10px 20px;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
    h2,
    a {
        font-size: 12px;
        padding: 5px 0;
        text-decoration: none;
    }
    a {
        color: #1d439b;
    }
`;

const Content = styled.div``;

const Widget = ({ children, title, linkTitle, link }) => {
    return (
        <Wrapper>
            <Header>
                <h2>{title}</h2>
                <a href={link} target='_blank' rel='noreferrer'>
                    {linkTitle}
                </a>
            </Header>
            <Content>{children}</Content>
        </Wrapper>
    );
};

export default Widget;
