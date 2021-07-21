import React from 'react';
import contact from '../../images/call.svg';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

import {

    ContactsContainer,
    ContactsWrapper,
    ContactsRow,
    Column1,TextWrapper,
    TopLine,
    Heading,
    ContactsNo,
    ContactsIcon,
    ContactsIconE,
    Column2,
    ImgWrap,
    Img

} from './contactsElements';

const Contacts = () => {
    return (
        <>
          <ContactsContainer id="contacts">
            <ContactsWrapper>
                <ContactsRow>
                    <Column1>
                        <ImgWrap>
                            <Img src={contact}/>
                        </ImgWrap>
                    </Column1>
                    <Column2>
                        <TextWrapper>
                            <TopLine>Contacts</TopLine>
                            <Heading>For Bookings and Orders</Heading>
                            <ContactsNo href="tel:+256750346788"><ContactsIcon><FaPhone /></ContactsIcon>+256750346788</ContactsNo>
                            <ContactsNo href="tel:+256777872618"><ContactsIcon><FaPhone /></ContactsIcon>+256777872618</ContactsNo>
                            <ContactsNo href="mailto:donaicakes@info.com"><ContactsIconE><FaEnvelope /></ContactsIconE>donaicakes@info.com</ContactsNo>
                        </TextWrapper>
                    </Column2>
                </ContactsRow>
            </ContactsWrapper>
          </ContactsContainer>  
        </>
    )
}

export default Contacts
