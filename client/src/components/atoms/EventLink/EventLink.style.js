import styled from "styled-components";

export const Wrapper = styled.div`
    width: 235px;
    margin-top: 5px;
    a {
        text-decoration: none;
    }
    img {
        width: 235px;
        height: 146px;
    }
    div {
        font-weight: bold;
        font-size: 12px;
        margin-top: 5px;
        color: ${({ theme }) => theme.colors.linkBlue};
    }
`;
