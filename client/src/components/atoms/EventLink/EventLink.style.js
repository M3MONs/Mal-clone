import styled from "styled-components";

export const Wrapper = styled.div`
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
