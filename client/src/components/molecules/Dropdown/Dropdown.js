import React, { useState } from "react";
import { Wrapper, DropdownTitle } from "./Dropdown.style";
import PropTypes from "prop-types";
import DropdownLinks from "./DropdownLinks";

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
