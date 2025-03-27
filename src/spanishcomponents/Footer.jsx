import React from 'react';


export default function Footer() {

  const links = {
    Company: ['About Us'],
    Support: ['Contact Us', 'FAQ']
  };

  return (
<footer className="bg-accent text-white pt-20 pb-10">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
      {/* Columna 1 - Logo y descripción */}
      <div className="lg:col-span-2">
        <div className="flex items-center space-x-2 mb-6">
          <span className="text-2xl font-bold">Ofertas de Liquidación</span>
        </div>
        <p className="text-gray-400 mb-6 max-w-md">
          Tu fuente confiable de pallets de liquidación de alta calidad a precios imbatibles.
          ¡Consigue las mejores ofertas al por mayor hoy mismo!
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

      {/* Columnas de enlaces */}
      {Object.entries(links).map(([title, items]) => (
        <div key={title}>
          <h4 className="text-lg font-semibold mb-6">
            {title === 'Quick Links' ? 'Enlaces Rápidos' : 
             title === 'Categories' ? 'Categorías' :
             title === 'Company' ? 'Empresa' : title}
          </h4>
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  {item === 'About Us' ? 'Sobre Nosotros' :
                   item === 'Contact' ? 'Contacto' :
                   item === 'FAQs' ? 'Preguntas Frecuentes' :
                   item === 'Blog' ? 'Blog' :
                   item === 'Privacy Policy' ? 'Política de Privacidad' :
                   item === 'Terms & Conditions' ? 'Términos y Condiciones' :
                   item === 'Electronics' ? 'Electrónicos' :
                   item === 'Home Goods' ? 'Artículos para el Hogar' :
                   item === 'Clothing' ? 'Ropa' :
                   item === 'Toys' ? 'Juguetes' : item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    {/* Derechos de autor */}
    <div className="border-t border-accent-light pt-8 text-center text-gray-400">
      <p>© 2024 Ofertas de Liquidación. Todos los derechos reservados.</p>
    </div>
  </div>
</footer>
  );
}
