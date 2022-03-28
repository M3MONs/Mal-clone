import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import DropdownLinks from "./DropdownLinks";

const Wrapper = styled.div`
    &:hover {
        background: ${({ theme }) => theme.colors.darkWhite};
        color: ${({ theme }) => theme.colors.black};
    }
`;

const DropdownTitle = styled.div`
    height: 36px;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Dropdown = ({ name, linksTable }) => {
    const [showList, setShowList] = useState(false);

    return (
        <Wrapper onMouseOver={() => setShowList(true)} onMouseLeave={() => setShowList(false)}>
            <DropdownTitle>{name}</DropdownTitle>
            {showList && <DropdownLinks links={linksTable} />}
        </Wrapper>
    );
};

Dropdown.propTypes = {
    name: PropTypes.string,
    linksTable: PropTypes.array,
};

export default Dropdown;
