import React from "react";
import { Wrapper, SelectWrapper, SearchInput, SearchIcon } from "./SearchBar.style";
import { SelectItems } from "./data/SelectItems";

const SearchBar = () => {
    return (
        <Wrapper>
            <SelectWrapper>
                <select name='' id=''>
                    {SelectItems.map((i) => (
                        <option value={i}>{i}</option>
                    ))}
                </select>
            </SelectWrapper>
            <SearchInput type='text' placeholder='Search Anime, Manga, and more...' />
            <button>
                <SearchIcon fill='blue' />
            </button>
        </Wrapper>
    );
};

export default SearchBar;
