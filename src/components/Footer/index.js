import React from 'react';
import {FaFacebook, FaTwitter, FaYoutube} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
import {

    FooterContainer,
    FooterWrapper,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    DeveloperLink,
    SocialIconLink

} from './footerElements';

const Footer = () => {

    const toggleHome = () =>{
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrapper>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome} >
                            donaiCakes
                        </SocialLogo>
                        <WebsiteRights>
                            {new Date().getFullYear()}&nbsp;
                            All rights reserved. Developed by &nbsp; <DeveloperLink href="https://www.donaiapps.com">donaiApps</DeveloperLink>
                        </WebsiteRights>
                        <socialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                        </socialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
