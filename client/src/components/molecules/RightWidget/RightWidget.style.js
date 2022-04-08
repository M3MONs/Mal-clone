import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 10px 20px;
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 8px 4px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
    background: ${({ theme }) => theme.colors.lightBlue};

    h3 {
        font-size: 15px;
    }
`;

export const ContentWrapper = styled.div`
    background: ${({ theme }) => theme.colors.lighestBlue};
    padding: 15px 0;
`;
