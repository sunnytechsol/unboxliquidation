import React from 'react';
import { Home, Facebook, Twitter, Instagram, Linkedin as LinkedIn } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/people/UnBox-Liquidation-San-Antonio-TX/61564372450843/" },
    // { icon: Twitter, href: "#" },
    { icon: Instagram, href: "https://www.instagram.com/unboxliquidation/" },
    // { icon: LinkedIn, href: "#" }
  ];

  const links = {
    Company: ['About Us'],
    Support: ['Contact Us', 'FAQ']
  };

  return (
    <footer className="bg-accent text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-bold">Liquidation Deals</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Your trusted source for high-quality liquidation pallets at unbeatable prices.
              Get the best wholesale deals today!
            </p>
            <div className="flex space-x-4">
              <a
                target='_blank'
                href="https://www.facebook.com/people/UnBox-Liquidation-San-Antonio-TX/61564372450843/"
                className="bg-accent-light p-2 rounded-full w-12 h-12 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                target='_blank'
                href="https://www.instagram.com/unboxliquidation/"
                className="bg-accent-light p-2 rounded-full w-12 h-12 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                target='_blank'
                href="https://www.tiktok.com/@unboxliquidationsatx"
                className="bg-accent-light p-2 rounded-full w-12 h-12 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-lg font-semibold mb-6">{title}</h4>
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-accent-light pt-8 text-center text-gray-400">
          <p>© 2024 Liquidation Deals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
