import React from 'react';


import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import HowItWorks from './components/HowItWorks';
import OurProducts from './components/OurProducts';
import ContactUs from './components/ContactUs';
import OurWorkSlider from './components/OurWorkSlider';
import FAQ from "./components/Faq";
import Footer from './components/Footer';


function EnglishPage() {

    return (
        <>
            <HeroSection />
            <AboutUs />
            <HowItWorks />
            {/* <OurProducts /> */}
            <OurWorkSlider />
            <ContactUs />
            <FAQ />
            <Footer />
        </>
    )
}

export default EnglishPage;