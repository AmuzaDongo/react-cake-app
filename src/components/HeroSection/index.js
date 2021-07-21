import React, { useState } from 'react';
import Video from '../../videos/cake.mp4';
import { Button } from '../ButtonElement';
import {
    HeroContainer, 
    HeroBg, 
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () =>{
        setHover(!hover)
    }
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Don't Miss to Test our Fravers</HeroH1>
                <HeroP>
                    Order for all kinds of cakes today and receive it within the required date, 
                    we believe in what we do. So don't hesitant to give us a try!!
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="contacts" onMouseEnter={onHover} onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={true}
                    offset={-80}
                    >
                        Order Now {hover? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
