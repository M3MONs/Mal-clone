import styled from "styled-components";

export const NavLink = styled.a`
    padding: 0px 15px;
    border-radius: 2px;
    background-color: ${(props) => (props.filled ? props.theme.colors.darkBlue : "white")};
    color: ${(props) => (props.filled ? "white" : props.theme.colors.darkBlue)};
    border: 2px solid ${({ theme }) => theme.colors.darkBlue};
    font-weight: 700;
    text-decoration: none;
`;
