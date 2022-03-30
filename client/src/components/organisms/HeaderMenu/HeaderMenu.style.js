import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 36px;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const DropdownsWrapper = styled.div`
    display: flex;
`;
