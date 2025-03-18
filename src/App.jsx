import React from 'react';
import { MessageCircle } from 'lucide-react'; // Replace with MessageCircle or another suitable icon
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import HowItWorks from './components/HowItWorks';
import OurProducts from './components/OurProducts';
import ContactUs from './components/ContactUs';
import OurWorkSlider from './components/OurWorkSlider';
import FAQ from "./components/Faq";
import Footer from './components/Footer';


import '../app.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <HowItWorks />
      <OurProducts />
      <OurWorkSlider />
      <ContactUs />
      <FAQ />
      <Footer />
      
      {/* WhatsApp Fixed Button */}
      <a
        href="https://api.whatsapp.com/send?phone=%2B17262107616&context=ARDyEraoBRPP65a0WT-nFcXDLkSh_F25bBOTf55PoGktd7A6O008l0E_O4VrqL_lUJlIfZ-7YyNpIMF4nm3CeL6jbfL5undCHzU3EvSRMP1ib2DaGwePNyAVPtYyCXDZXdjy5CXAvWejeUOeVWY4g1GlBQ&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwY2xjawIj0x1leHRuA2FlbQIxMAABHaHjvZnrCgPwFm5eH41IFzpnd2f7jnMjpH8Y4-o3HmqE8NamPz6VCIruxg_aem_3tqwqvacQHKtlHMGliyq9A" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-6 bottom-6 z-50 text-white p-0 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 group"
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png" width='70' height='70' alt="whatsapp-chat" />
      </a>
    </div>
  );
}

export default App;
