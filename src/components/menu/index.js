import React from 'react';
import cup_cake from '../../images/27.png';
import cake from '../../images/8.jpg';
import cookie from '../../images/7.jpg';
import {

    MenuContainer,
    MenuH1,
    MenuWrapper,
    MenuCard,
    MenuImg,
    MenuH2,
    MenuP

} from './menuElements';

const Menu = () => {
    return (
        <MenuContainer id="menu">
            <MenuH1>Our Menu</MenuH1>
            <MenuWrapper>
                <MenuCard>
                    <MenuImg src={cup_cake} />
                    <MenuH2>Cup Cakes</MenuH2>
                    <MenuP>we’re always finding inspiration to cook up new flavors. We also offer cupcakes, too. See what we’re baking up today!</MenuP>
                </MenuCard>
                <MenuCard>
                    <MenuImg src={cake} />
                    <MenuH2>Cakes</MenuH2>
                    <MenuP>Find the perfect layer or wedding, birthday cake made with the finest ingredients and baked fresh for you and your guests.</MenuP>
                </MenuCard>
                <MenuCard>
                    <MenuImg src={cookie} />
                    <MenuH2>Cookies</MenuH2>
                    <MenuP>donaiCakes brings you cookies in all flavors and shape, let no one else tell you about our cookies test it by yourself.</MenuP>
                </MenuCard>
            </MenuWrapper>
        </MenuContainer>
    )
}

export default Menu
