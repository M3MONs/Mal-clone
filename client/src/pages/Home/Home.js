import React from "react";

import { Wrapper, LeftColumn, RightColumn } from "./Home.style";
import Widget from "components/organisms/Widget/Widget";
import { LeftWidgets, RightWidgets } from "./data/ContentItems";
import RightWidget from "components/molecules/RightWidget/RightWidget";

const Home = () => {
    return (
        <>
            <Wrapper>
                <LeftColumn>
                    {/* Map wypisuje wszystkie widgety z ContentItems w kolejności */}
                    {LeftWidgets.map((widget) => (
                        <Widget widget={widget} />
                    ))}
                </LeftColumn>
                <RightColumn>
                    {RightWidgets.map((widget) => (
                        <RightWidget widget={widget} />
                    ))}
                </RightColumn>
            </Wrapper>
        </>
    );
};

export default Home;
