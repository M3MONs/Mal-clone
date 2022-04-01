import React from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./SeasonAnime.style";

const SeasonAnime = ({ title, link, img }) => {
    return (
        <Wrapper>
            <a href={link} target='_blank' rel='noreferrer'>
                <img src={img} alt={title} />
                <span>{title}</span>
            </a>
        </Wrapper>
    );
};

SeasonAnime.defaultProps = {
    title: "",
    link: "/#",
    img: "",
};

SeasonAnime.propTypes = {
    title: PropTypes.string,
    link: PropTypes.string,
    img: PropTypes.string,
};

export default SeasonAnime;
