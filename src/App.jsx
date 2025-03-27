import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import EnglishPage from './EnglishPage';
import SpanishPage from './SpanishPage';

import '../app.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('english'); // 'english' or 'spanish'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#contact", label: "contact" },
    { href: "#faq", label: "FAQ" },
  ];

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'english' ? 'spanish' : 'english');
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className={`fixed w-full z-50 transition-all bg-white duration-300 ${isScrolled ? 'py-4 bg-white/95 backdrop-blur-sm shadow-lg' : 'py-6 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <img src="images/logo.jpg" width='160' alt="site-logo" />
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-accent hover:text-primary transition-colors font-medium"
                >
                  {link.label}
                </motion.a>
              ))}

              {/* Language Toggle Button */}
              <motion.button
                onClick={toggleLanguage}
                className="px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {language === 'english' ? 'Español' : 'English'}
              </motion.button>

              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.facebook.com/people/UnBox-Liquidation-San-Antonio-TX/61564372450843/'
                className="bg-light p-1 text-dark rounded-full hover:text-primary transition-colors"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.instagram.com/unboxliquidation/'
                className="bg-light p-1 text-dark rounded-full hover:text-primary transition-colors"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.tiktok.com/@unboxliquidationsatx'
                className="bg-light p-1 text-dark rounded-full hover:text-primary transition-colors"
              >
                <i className="fab fa-tiktok"></i>
              </a>
            </div>

            <button
              className="md:hidden text-accent"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t mt-4"
            >
              <div className="px-6 py-4 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-accent hover:text-primary transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                
                {/* Mobile Language Toggle Button */}
                <button
                  onClick={() => {
                    toggleLanguage();
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-2 py-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors text-sm font-medium"
                >
                  {language === 'english' ? 'Español' : 'English'}
                </button>

                <div className="flex pt-2">
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://www.facebook.com/people/UnBox-Liquidation-San-Antonio-TX/61564372450843/'
                    className="bg-light p-1 text-dark rounded-full hover:text-primary transition-colors"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://www.instagram.com/unboxliquidation/'
                    className="bg-light p-1 mx-3 text-dark rounded-full hover:text-primary transition-colors"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://www.tiktok.com/@unboxliquidationsatx'
                    className="bg-light p-1 text-dark rounded-full hover:text-primary transition-colors"
                  >
                    <i className="fab fa-tiktok"></i>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      
      {/* Show the appropriate page based on language selection */}
      {language === 'english' ? <EnglishPage /> : <SpanishPage />}
    </div>
  );
}

export default App;