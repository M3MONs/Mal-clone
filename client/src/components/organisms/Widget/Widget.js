import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Header, Content } from "./Widget.style";
import Slider from "components/molecules/Slider/Slider";

const Widget = ({
    widget: { title, linkTitle, link, slider, slides = null, display = "block" },
    children,
}) => {
    return (
        <Wrapper>
            <Header>
                <h2>{title}</h2>
                <a href={link} target='_blank' rel='noreferrer'>
                    {linkTitle}
                </a>
            </Header>
            <Content display={display}>
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
    display: PropTypes.string,
};

export default Widget;
