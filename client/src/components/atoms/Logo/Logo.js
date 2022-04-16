import React from "react";
import styled from "styled-components";

const Wrapper = styled.h1`
    color: ${({ theme }) => theme.colors.darkBlue};
    font-size: 2rem;
`;

const Logo = () => {
    return <Wrapper>YourAnimeList</Wrapper>;
};

export default Logo;
