import React from "react";
import styled from "styled-components";
import { DefaultLink } from "../DefaultLink/DefaultLink";

const Wrapper = styled.li`
    margin: 5px 0;
    display: flex;
    align-items: center;
    gap: 8px;
    .rank {
        color: ${({ theme }) => theme.colors.darkGray};
    }
`;

const FooterRankingItem = ({ item, rank }) => {
    return (
        <Wrapper>
            <span className='rank'>{rank}</span>
            <DefaultLink href={item.link} size='10px'>
                {item.title}
            </DefaultLink>
        </Wrapper>
    );
};

export default FooterRankingItem;
