import React, { useState } from 'react'
import Contacts from '../components/Contacts'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne,homeObjTwo,homeObjThree} from '../components/InfoSection/Data'
import Menu from '../components/menu'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen ] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle}/>  
          <Navbar toggle={toggle}/>
          <HeroSection />
          <InfoSection {...homeObjOne}/>
          <Menu />
          <InfoSection {...homeObjTwo}/>
          <InfoSection {...homeObjThree}/>
          <Contacts />
          <Footer />
        </>
    )
}

export default Home

