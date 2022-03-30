import styled from "styled-components";

export const Wrapper = styled.div`
    &:hover {
        background: ${({ theme }) => theme.colors.darkWhite};
        color: ${({ theme }) => theme.colors.black};
    }
`;

export const DropdownTitle = styled.div`
    height: 36px;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LinksList = styled.ul`
    background-color: ${({ theme }) => theme.colors.darkWhite};
    display: flex;
    flex-direction: column;
    position: absolute;
    min-width: 118px;
    list-style: none;
`;
