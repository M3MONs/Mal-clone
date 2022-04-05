import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    gap: 5px;
    margin-top: 8px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};

    img {
        border: 1px solid ${({ theme }) => theme.colors.gray};
        padding: 1px;
    }

    .link-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .rating {
            color: ${({ theme }) => theme.colors.darkGray};
            font-size: 10px;
        }
    }

    .article-text {
        margin-top: 5px;
        font-size: 12px;
        line-height: 1.5;
    }

    .information {
        font-size: 12px;
        display: flex;
        align-items: center;
        gap: 10px;
        padding-top: 6px;
        padding-bottom: 3px;
        line-height: 1.5;
        color: ${({ theme }) => theme.colors.darkGray};
        b {
            color: black;
        }
        a {
            font-size: 12px;
            color: ${({ theme }) => theme.colors.linkBlue};
            cursor: pointer;
            text-decoration: none;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            &:hover {
                text-decoration: underline;
            }
        }
        .tags {
            display: none;
        }
    }
`;
