import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.lightBlue};
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkBlue};
    h1 {
        font-size: 16px;
        padding: 6px 9px;
    }
`;

const HelloMessage = () => {
    return (
        <Wrapper>
            <h1>Welcome to YourAnimeList.net!</h1>
        </Wrapper>
    );
};

export default HelloMessage;
