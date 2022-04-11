import React from "react";
import { Wrapper, NavWrapper, DropdownsWrapper, HeaderWrapper } from "./NavBar.style";
import NavLinks from "components/molecules/NavLinks/NavLinks";
import Logo from "components/atoms/Logo/Logo";
import Dropdown from "components/molecules/Dropdown/Dropdown";
import SearchBar from "components/molecules/SearchBar/SearchBar";

import { DropdownItems as Dropdowns } from "./data/DropdownItems";
import HelloMessage from "components/atoms/HelloMessage/HelloMessage";

const NavBar = () => {
    return (
        <>
            <Wrapper>
                <NavWrapper>
                    <Logo />
                    <NavLinks />
                </NavWrapper>
            </Wrapper>
            <HeaderWrapper>
                <DropdownsWrapper>
                    {/* Wypisuje Dropdowns z pliku data/DropdownItems */}
                    {Dropdowns &&
                        Dropdowns.map((i) => <Dropdown name={i.name} linksTable={i.items} />)}
                </DropdownsWrapper>
                <SearchBar />
            </HeaderWrapper>
            <HelloMessage />
        </>
    );
};

export default NavBar;
