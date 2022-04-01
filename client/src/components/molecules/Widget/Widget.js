import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Header, Content } from "./Widget.style";
import Slider from "../Slider/Slider";

const Widget = ({ children, title, linkTitle, link, slider = false, slides = null }) => {
    return (
        <Wrapper>
            <Header>
                <h2>{title}</h2>
                <a href={link} target='_blank' rel='noreferrer'>
                    {linkTitle}
                </a>
            </Header>
            <Content slider={slider}>
                {slider ? <Slider slides={slides}>{children}</Slider> : children}
            </Content>
        </Wrapper>
    );
};

Widget.propTypes = {
    title: PropTypes.string,
    linkTitle: PropTypes.string,
    link: PropTypes.string,
    slider: PropTypes.bool,
};

export default Widget;
