import styled from 'styled-components';
import { FaPhone, FaEnvelope } from 'react-icons/fa';


export const ContactsContainer = styled.div `

    color: #010606;
    background: #f9f9f9;

    @media screen and (max-width: 768px){
        padding: 100px 0;
    }

`;

export const ContactsWrapper = styled.div `

    display: grid;
    z-index: 1;
    height: 660px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;

    @media screen and (max-width: 768px){
        width: 100%;
        max-width: 350px;
    }
    @media screen and (max-width: 480px){
        max-width: 350px;
    }

`;

export const ContactsRow = styled.div `

    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => imgStart ? `
'col2 col1'
` : `
'col1 col2'
`};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart}) => imgStart ? `
'col1'
'col2'
` : `
'col1 col1'
'col2 col2'
`}
    }

`;

export const Column1 = styled.div `

    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
 
`;

export const Column2 = styled.div `

    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;

`;

export const TextWrapper = styled.div `

    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;

`;

export const TopLine = styled.p `

    color: #01bf71;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;

`;

export const Heading = styled.h1 `

    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    color: #010606;

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;


export const ContactsNo = styled.p `

    max-width: 440px;
    margin-bottom: 5px;
    font-size: 18px;
    line-height: 24px;
    color: #010606;
    cursor: pointer;

    &:hover{
       color: #01bf71; 
    }

`;

export const ImgWrap = styled.div `

    max-width: 555px;
    height: 100%;    

`;

export const Img = styled.img `

    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;

`;

export const ContactsIcon = styled(FaPhone)
`

    color: #000;
    background: transparent;
    font-size: 1rem;
    right: 2rem;
    cursor: pointer;
    outline: none;
    padding: 0 25px 0;

    &:hover{
        color: #01bf71;
    }

`;

export const ContactsIconE = styled(FaEnvelope)
`

    color: #000;
    background: transparent;
    font-size: 1rem;
    cursor: pointer;
    padding: 0 25px 0;
    outline: none;

    &:hover{
        color: #01bf71;
    }

`;