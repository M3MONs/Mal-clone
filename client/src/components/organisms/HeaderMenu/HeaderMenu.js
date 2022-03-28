import React from "react";
import styled from "styled-components";
import Dropdown from "components/molecules/Dropdown/Dropdown";

import { DropdownItems as Dropdowns } from "./DropdownItems";

const Wrapper = styled.div`
    width: 100%;
    height: 36px;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const DropdownsWrapper = styled.div`
    display: flex;
`;

const SearchWrapper = styled.div``;

const HeaderMenu = () => {
    return (
        <Wrapper>
            <DropdownsWrapper>
                {Dropdowns && Dropdowns.map((i) => <Dropdown name={i.name} linksTable={i.items} />)}
            </DropdownsWrapper>
            <SearchWrapper></SearchWrapper>
        </Wrapper>
    );
};

export default HeaderMenu;
