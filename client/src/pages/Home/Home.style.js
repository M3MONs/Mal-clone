import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
`;

export const LeftColumn = styled.div`
    width: 740px;
    border-right: 1px solid ${({ theme }) => theme.colors.gray};
`;

export const RightColumn = styled.div`
    width: 322px;
`;
