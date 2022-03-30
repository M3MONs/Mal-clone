import React from "react";
import { Wrapper, DropdownsWrapper } from "./HeaderMenu.style";
import Dropdown from "components/molecules/Dropdown/Dropdown";
import SearchBar from "components/molecules/SearchBar/SearchBar";

import { DropdownItems as Dropdowns } from "./data/DropdownItems";

const HeaderMenu = () => {
    return (
        <Wrapper>
            <DropdownsWrapper>
                {Dropdowns && Dropdowns.map((i) => <Dropdown name={i.name} linksTable={i.items} />)}
            </DropdownsWrapper>
            <SearchBar />
        </Wrapper>
    );
};

export default HeaderMenu;
