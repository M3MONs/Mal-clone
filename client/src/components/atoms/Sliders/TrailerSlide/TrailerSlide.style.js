import styled from "styled-components";
import playBtn from "assets/img/btn_play.jpg";

export const TrailerVideo = styled.a`
    width: 220px;
    height: 120px;
    position: relative;
    display: block;
    background-image: url(${(props) => props.img});
    background-repeat: no-repeat;
    background-size: cover;
    span {
        background-image: url(${playBtn});
        background-position: 0 0;
        background-repeat: no-repeat;
        background-size: 70px auto;
        border-radius: 6px;
        cursor: pointer;
        display: inline-block;
        height: 30px;
        width: 70px;
        left: 50%;
        overflow: hidden;
        position: absolute;
        top: 50%;
        text-indent: -9999px;
        margin-left: -33px;
        margin-top: -15px;
    }
`;
