import styled from "styled-components";

export const Wrapper = styled.article`
    margin: 0 10px 20px;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkGray};
    h2,
    a {
        font-size: 12px;
        padding: 5px 0;
        text-decoration: none;
    }
    a {
        color: ${({ theme }) => theme.colors.linkBlue};
    }
`;

export const Content = styled.div`
    display: ${(props) => (props?.display ? props?.display : "block")};
    justify-content: space-between;
    margin: 5px 0 20px;
`;
