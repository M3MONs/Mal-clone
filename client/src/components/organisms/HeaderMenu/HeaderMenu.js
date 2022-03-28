import React from "react";
import styled from "styled-components";
import Dropdown from "components/molecules/Dropdown/Dropdown";

import { DropdownItems as Dropdowns } from "./data/DropdownItems";

import { ReactComponent as SearchSvg } from "assets/svg/search-solid.svg";

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

const SearchWrapper = styled.div`
    padding-right: 6px;
    height: 22px;
    display: flex;
    align-items: center;
    button {
        height: 22px;
        padding: 0 5px;
        margin: 0;
        border-radius: 0 4px 4px 0;
        border: 0px white solid;
        /* border-left: 1px solid white; */
        /* background: none; */
        outline: none;
        overflow: hidden;
    }
`;

const SearchIcon = styled(SearchSvg)`
    width: 12px;
    height: 12px;
`;

const SearchInput = styled.input`
    min-width: 220px;
    border: none;
    outline: none;
    height: 22px;
    padding: 2px 5px;
`;

const SelectWrapper = styled.div`
    select {
        height: 22px;
        width: 90px;
        overflow: hidden;
        border: none;
        border-right: 1px solid black;
        border-radius: 5px 0 0 5px;
        font-size: 12px;
        option {
            text-transform: capitalize;
            font-size: 12px;
        }
    }
`;

const HeaderMenu = () => {
    return (
        <Wrapper>
            <DropdownsWrapper>
                {Dropdowns && Dropdowns.map((i) => <Dropdown name={i.name} linksTable={i.items} />)}
            </DropdownsWrapper>
            <SearchWrapper>
                <SelectWrapper>
                    <select name='' id=''>
                        <option value=''>All</option>
                        <option value=''>Anime</option>
                        <option value=''>Manga</option>
                    </select>
                </SelectWrapper>
                <SearchInput type='text' placeholder='Search Anime, Manga, and more...' />
                <button>
                    <SearchIcon fill='blue' />
                </button>
            </SearchWrapper>
        </Wrapper>
    );
};

export default HeaderMenu;
