import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Widget from "../Widget/Widget";

import { SwiperSlide } from "swiper/react";

import { LeftWidgets, RightWidgets } from "./data/ContentItems";
import RightWidget from "components/molecules/RightWidget/RightWidget";
import RightWidgetItem from "components/atoms/RightWidgetItem/RightWidgetItem";

const Wrapper = styled.div`
    display: flex;
`;

const LeftColumn = styled.div`
    width: 740px;
    border-right: 1px solid ${({ theme }) => theme.colors.gray};
`;

const RightColumn = styled.div`
    width: 322px;
`;

const Content = () => {
    return (
        <>
            <Wrapper>
                <LeftColumn>
                    {/* Map wypisuje wszystkie widgety z ContentItems w kolejności */}
                    {LeftWidgets.map((widget) => (
                        <Widget widget={widget}>
                            {/* Sprawdza czy widget posiada komponent Atom nastepnie czy to slider czy nie*/}
                            {widget?.Atom &&
                                widget.items.map((item) =>
                                    widget?.slider ? (
                                        <SwiperSlide>
                                            <widget.Atom item={item}></widget.Atom>
                                        </SwiperSlide>
                                    ) : (
                                        <widget.Atom item={item}></widget.Atom>
                                    )
                                )}
                        </Widget>
                    ))}
                </LeftColumn>
                <RightColumn>
                    {RightWidgets.map((widget) => (
                        <RightWidget widget={widget}>
                            {widget.items.map((item) => (
                                <RightWidgetItem item={item}></RightWidgetItem>
                            ))}
                        </RightWidget>
                    ))}
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
