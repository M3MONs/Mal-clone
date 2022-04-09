import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    margin-bottom: 25px;
    span {
        color: ${({ theme }) => theme.colors.footerGray};
        font-size: 12px;
    }
    .badge {
        width: 100px;
        height: 30px;
    }
    .recom {
        display: flex;
        align-items: center;
        gap: 8px;
        img {
            width: auto;
            height: 20px;
        }
        h4 {
            font-weight: 400;
            font-size: 11px;
            color: ${({ theme }) => theme.colors.footerGray};
        }
    }
`;

export const Block = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;

    .f-link {
        color: ${({ theme }) => theme.colors.white};
        text-decoration: none;
        font-size: 13px;
        margin: 0 3px;
        &:hover {
            text-decoration: underline;
        }
    }

    .home {
        margin-right: 10px;
    }

    .login {
        margin-left: 10px;
    }

    .icons {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
`;
