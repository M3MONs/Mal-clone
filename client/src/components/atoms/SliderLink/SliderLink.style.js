import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    overflow: visible;
    height: 175px;
    img {
        width: 108px;
        height: 163px;
    }
    .text {
        width: 108px;
        position: absolute;
        z-index: 10;
        top: 163px;
        text-decoration: none;
        cursor: pointer;
        color: ${({ theme }) => theme.colors.linkBlue};
        font-size: 11px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        &:hover {
            text-decoration: underline;
        }
    }
`;
