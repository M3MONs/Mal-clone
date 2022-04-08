import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    gap: 7px;
    padding: 0 10px;
    margin: 10px 0;

    .number {
        width: 24px;
        color: ${({ theme }) => theme.colors.darkGray};
        font-weight: bold;
    }

    img {
        width: 50px;
        height: 70px;
        padding: 1px;
        border: 1px solid ${({ theme }) => theme.colors.darkGray};
        background: white;
    }
`;

export const InfoContent = styled.div`
    width: 220px;
    p {
        font-size: 12px;
        color: ${({ theme }) => theme.colors.darkGray};
    }
    .rating {
        margin-top: 8px;
    }
`;
