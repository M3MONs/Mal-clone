import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import DropdownLinks from "./DropdownLinks";

const DropdownTitle = styled.div`
    height: 36px;
    width: 70px;
    padding: 10px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Dropdown = ({ name, linksTable }) => {
    const [showList, setShowList] = useState(false);

    return (
        <div onMouseOver={() => setShowList(true)} onMouseLeave={() => setShowList(false)}>
            <DropdownTitle>{name}</DropdownTitle>
            {showList && <DropdownLinks links={linksTable} />}
        </div>
    );
};

Dropdown.propTypes = {
    name: PropTypes.string,
    linksTable: PropTypes.array,
};

export default Dropdown;
