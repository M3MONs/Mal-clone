import styled from "styled-components";

export const Wrapper = styled.div`
    font-size: 12px;
    line-height: 1.5;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
    margin: 10px 0 0;
    padding-bottom: 5px;

    .anime-wrapper {
        border: 0;
        width: 100%;
        border-collapse: separate;
        text-indent: initial;
        tbody {
            display: table-row-group;
            tr {
                display: table-row;
            }
        }
    }

    .recommendation {
        color: ${({ theme }) => theme.colors.darkGray};
        font-size: 13px;
        a {
            color: ${({ theme }) => theme.colors.linkBlue};
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        }
    }

    img {
        border: 1px solid ${({ theme }) => theme.colors.darkGray};
        padding: 1px;
    }
`;
