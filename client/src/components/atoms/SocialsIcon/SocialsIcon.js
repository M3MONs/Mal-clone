import styled from "styled-components";

export const SocialsIcon = styled.a`
    color: ${({ theme }) => theme.colors.white};
    font-size: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    svg {
        text-align: center;
        font-weight: 400;
    }
    &:hover {
        color: ${({ theme }) => theme.colors.footerGray};
        text-decoration: underline;
    }
`;
