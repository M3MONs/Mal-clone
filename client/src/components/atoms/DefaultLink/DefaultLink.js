import styled from "styled-components";

export const DefaultLink = styled.a`
    font-size: 12px;
    color: ${({ theme }) => theme.colors.linkBlue};
    font-weight: ${(props) => (props.bold ? "bold" : "normal")};
    z-index: 20;
    cursor: pointer;
    text-decoration: none;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    &:hover {
        text-decoration: underline;
    }
`;
