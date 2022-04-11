import styled from "styled-components";

export const Wrapper = styled.div`
    width: 160px;
    position: relative;
    a {
        text-decoration: none;
        color: white;
    }
    img {
        width: 160px;
        height: 220px;
    }
    span {
        position: absolute;
        background-image: url("https://cdn.myanimelist.net/images/image_box_shadow_bottom.png?v=1634263200");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 100%;
        margin: 3px 0;
        padding: 2px 3px;
        z-index: 10;
        font-size: 11px;
        font-weight: bold;
        line-height: 1.5em;
        text-shadow: rgb(0 0 0 / 100%) 1px 1px 0;
        bottom: 0;
        left: 0;
        text-align: center;
    }
`;
