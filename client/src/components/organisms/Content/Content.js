import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import HelloMessage from "components/atoms/HelloMessage/HelloMessage";
import Widget from "components/molecules/Widget/Widget";

import { SwiperSlide } from "swiper/react";

import { Widgets } from "./data/ContentItems";

const Wrapper = styled.div`
    padding: 10px 0;
    border-left: 1px solid ${({ theme }) => theme.colors.gray};
    border-right: 1px solid ${({ theme }) => theme.colors.gray};
    display: flex;
`;

const LeftColumn = styled.div`
    width: 780px;
    border-right: 1px solid ${({ theme }) => theme.colors.gray};
`;

const RightColumn = styled.div``;

const Content = () => {
    return (
        <>
            <HelloMessage />
            <Wrapper>
                <LeftColumn>
                    {/* Map wypisuje wszystkie widgety z ContentItems w kolejności */}
                    {Widgets.map((widget) => (
                        <Widget
                            title={widget.title}
                            linkTitle={widget.linkTitle}
                            link={widget.link}
                            slider={widget.slider}
                        >
                            {/* Sprawdza czy widget posiada komponent Atom nastepnie czy to slider czy nie*/}
                            {widget?.Atom &&
                                widget.items.map(({ img, title, link }) =>
                                    widget?.slider ? (
                                        <SwiperSlide>
                                            <widget.Atom
                                                link={link}
                                                title={title}
                                                img={img}
                                            ></widget.Atom>
                                        </SwiperSlide>
                                    ) : (
                                        <widget.Atom
                                            link={link}
                                            title={title}
                                            img={img}
                                        ></widget.Atom>
                                    )
                                )}
                        </Widget>
                    ))}
                </LeftColumn>
                <RightColumn>
                    <h1>Right</h1>
                </RightColumn>
            </Wrapper>
        </>
    );
};

Content.propTypes = {
    Widgets: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            linkTitle: PropTypes.string,
            link: PropTypes.string,
            slider: PropTypes.bool,
            items: PropTypes.array,
            Atom: PropTypes.element,
        })
    ),
};

export default Content;
