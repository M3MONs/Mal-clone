import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Slider from "../Slider/Slider";

const Wrapper = styled.article`
    margin: 0 10px 20px;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkGray};
    h2,
    a {
        font-size: 12px;
        padding: 5px 0;
        text-decoration: none;
    }
    a {
        color: ${({ theme }) => theme.colors.linkBlue};
    }
`;

const Content = styled.div`
    display: ${(props) => (props.slider ? "block" : "flex")};
    justify-content: space-between;
    margin: 5px 0 20px;
`;

const Widget = ({ children, title, linkTitle, link, slider = false }) => {
    return (
        <Wrapper>
            <Header>
                <h2>{title}</h2>
                <a href={link} target='_blank' rel='noreferrer'>
                    {linkTitle}
                </a>
            </Header>
            <Content slider={slider}>{slider ? <Slider>{children}</Slider> : children}</Content>
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
