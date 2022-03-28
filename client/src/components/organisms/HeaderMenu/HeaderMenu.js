import React from "react";
import styled from "styled-components";
import Dropdown from "components/molecules/Dropdown/Dropdown";

import { DropdownItems as Dropdowns } from "./data/DropdownItems";

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
    display: flex;
`;

const SelectWrapper = styled.div`
    select {
        height: 22px;
        width: 90px;
        overflow: hidden;
        border-radius: 5px 0 0 5px;
        option {
            text-transform: capitalize;
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
                <input type='text' />
                <button>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                        <path d='M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z' />
                    </svg>
                </button>
            </SearchWrapper>
        </Wrapper>
    );
};

export default HeaderMenu;
