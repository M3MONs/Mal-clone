import { SocialsIcon } from "components/atoms/Icons/SocialsIcon/SocialsIcon";
import React from "react";
import { Wrapper, Block } from "./FooterLinks.style";

const FooterLinks = ({ firstBlock = {}, secondBlock = null }) => {
    return (
        <Wrapper>
            {firstBlock && (
                <Block>
                    {firstBlock?.title && <span>{firstBlock.title}</span>}
                    <div className='icons'>
                        {firstBlock.items.map((i) => {
                            return i.link ? (
                                <SocialsIcon href={i.link}>{i.atom}</SocialsIcon>
                            ) : (
                                <>{i.atom}</>
                            );
                        })}
                    </div>
                </Block>
            )}
            {secondBlock && (
                <Block>
                    <span>{secondBlock.title}</span>
                    <div className='icons'>
                        {secondBlock.items.map((i) => (
                            <SocialsIcon href={i.link}>{i.atom}</SocialsIcon>
                        ))}
                    </div>
                </Block>
            )}
        </Wrapper>
    );
};

export default FooterLinks;
