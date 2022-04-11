import styled from "styled-components";

export const DefaultLink = styled.a`
    font-size: ${(props) => (props.size ? props.size : "12px")};
    color: ${({ theme }) => theme.colors.linkBlue};
    font-weight: ${(props) => (props.bold ? "bold" : "normal")};
    z-index: 20;
    cursor: pointer;
    text-decoration: none;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: ${(props) => (props.wrap ? "wrap" : "nowrap")};
    &:hover {
        text-decoration: underline;
    }
`;
