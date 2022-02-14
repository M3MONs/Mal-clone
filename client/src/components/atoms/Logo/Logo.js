import React from "react";
import styled from "styled-components";

const Wrapper = styled.h1`
    @import url("https://fonts.googleapis.com/css2?family=Akaya+Telivigala&display=swap");
    font-family: "Akaya Telivigala", cursive;
    color: ${({ theme }) => theme.colors.darkBlue};
    font-size: 2rem;
`;

const Logo = () => {
    return <Wrapper>YourAnimeList</Wrapper>;
};

export default Logo;
