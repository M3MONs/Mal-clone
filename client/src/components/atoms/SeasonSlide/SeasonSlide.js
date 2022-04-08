import React from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./SeasonSlide.style";

const SeasonSlide = ({ item: { title, link, img } }) => {
    return (
        <Wrapper>
            <a href={link} target='_blank' rel='noreferrer'>
                <img src={img} alt={title} />
                <span>{title}</span>
            </a>
        </Wrapper>
    );
};

SeasonSlide.defaultProps = {
    title: "",
    link: "/#",
    img: "",
};

SeasonSlide.propTypes = {
    title: PropTypes.string,
    link: PropTypes.string,
    img: PropTypes.string,
};

export default SeasonSlide;
