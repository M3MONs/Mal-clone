import React from "react";
import styled from "styled-components";
import HelloMessage from "components/atoms/HelloMessage/HelloMessage";
import Widget from "components/molecules/Widget/Widget";

const Wrapper = styled.div`
    padding: 10px 0;
    border-left: 1px solid ${({ theme }) => theme.colors.gray};
    border-right: 1px solid ${({ theme }) => theme.colors.gray};
`;

const LeftWrapper = styled.div`
    width: 780px;
    border-right: 1px solid ${({ theme }) => theme.colors.gray};
`;

const RightWrapper = styled.div``;

const Content = () => {
    return (
        <>
            <HelloMessage />
            <Wrapper>
                {/* Lewa Kolumna */}
                <LeftWrapper>
                    <Widget
                        title='MALxJapan -More than just anime-'
                        linkTitle='Visit MALxJapan'
                        link='https://mxj.myanimelist.net/'
                    ></Widget>
                </LeftWrapper>
                {/* Prawa Kolumna */}
                <RightWrapper></RightWrapper>
            </Wrapper>
        </>
    );
};

export default Content;
