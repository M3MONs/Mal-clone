import { DefaultLink } from "components/atoms/Links/DefaultLink/DefaultLink";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 200px;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
    padding: 5px 0;
    h3 {
        font-weight: normal;
        font-size: 14px;
    }
`;

const Content = styled.ul``;

const FooterRanking = ({ children = null, link = "/#", title = "" }) => {
    return (
        <Wrapper>
            <Header>
                <h3>{title}</h3>
                <DefaultLink href={link}>More</DefaultLink>
            </Header>
            <Content>{children}</Content>
        </Wrapper>
    );
};

export default FooterRanking;
