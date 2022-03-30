import styled from "styled-components";
import { ReactComponent as SearchSvg } from "assets/svg/search-solid.svg";

export const Wrapper = styled.div`
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
        outline: none;
        cursor: pointer;
        overflow: hidden;
    }
`;

export const SelectWrapper = styled.div`
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

export const SearchInput = styled.input`
    min-width: 220px;
    border: none;
    outline: none;
    height: 22px;
    padding: 2px 5px;
`;

export const SearchIcon = styled(SearchSvg)`
    width: 12px;
    height: 12px;
`;
