import React from 'react';
import { 
    SidebarContainer,
    Icon, 
    CloseIcon,
    SideBarWrapper,
    SideBarMenu,
    SideBarLink,
    SideBtnWrap,
    SideBarRoute
 } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="about" onClick={toggle}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact={true}
                        offset={-80}
                    >About</SideBarLink>
                    <SideBarLink to="menu" onClick={toggle}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact={true}
                        offset={-80}
                    >Menu</SideBarLink>
                    <SideBarLink to="weddings" onClick={toggle}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact={true}
                        offset={-80}
                    >Weddings</SideBarLink>
                    <SideBarLink to="events" onClick={toggle}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact={true}
                        offset={-80}
                    >Events</SideBarLink>
                    <SideBarLink to="contacts" onClick={toggle}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact={true}
                        offset={-80}
                    >Contacts</SideBarLink>
                </SideBarMenu>
                <SideBtnWrap>
                    <SideBarRoute to="/orders" onClick={toggle}>Orders</SideBarRoute>
                </SideBtnWrap>
            </SideBarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
