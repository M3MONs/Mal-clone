import FooterRankingItem from "components/atoms/Links/FooterRankingLink/FooterRankingLink";
import FooterLinks from "components/molecules/FooterLinks/FooterLinks";
import FooterRanking from "components/molecules/FooterRanking/FooterRanking";
import React from "react";
import styled from "styled-components";

import { Rankings } from "./data/Ranking";
import { Socials } from "./data/Socials";

const Wrapper = styled.footer`
    width: 100%;
    margin-top: 30px;
`;

const RankingWrapper = styled.div`
    width: 100%;
    padding: 10px 0;
    background: ${({ theme }) => theme.colors.lighestBlue};
    display: flex;
    justify-content: center;
    gap: 30px;
`;

const LinksWrapper = styled.div`
    padding: 32px 0 15px;
    background: ${({ theme }) => theme.colors.darkBlue};
`;

const Footer = () => {
    return (
        <Wrapper>
            <RankingWrapper>
                {Rankings.map((ranking) => (
                    <FooterRanking title={ranking.title} link={ranking.link}>
                        {ranking.items.map((item, i) => (
                            <FooterRankingItem item={item} rank={i + 1} />
                        ))}
                    </FooterRanking>
                ))}
            </RankingWrapper>
            <LinksWrapper>
                <FooterLinks firstBlock={Socials.media} secondBlock={Socials.app} />
                <FooterLinks firstBlock={Socials.links} />
                <FooterLinks firstBlock={Socials.recommended} />
            </LinksWrapper>
        </Wrapper>
    );
};

export default Footer;
