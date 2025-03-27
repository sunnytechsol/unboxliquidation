import React from 'react';


import HeroSection from './spanishcomponents/HeroSection';
import AboutUs from './spanishcomponents/AboutUs';
import HowItWorks from './spanishcomponents/HowItWorks';
import OurProducts from './spanishcomponents/OurProducts';
import ContactUs from './spanishcomponents/ContactUs';
import OurWorkSlider from './spanishcomponents/OurWorkSlider';
import FAQ from "./spanishcomponents/Faq";
import Footer from './spanishcomponents/Footer';


function SpanishPage() {

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

export default SpanishPage;