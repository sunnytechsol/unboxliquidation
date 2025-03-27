import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, Instagram} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BarraNavegacion() {
  const enlacesSociales = [
    { icon: Facebook, href: "https://www.facebook.com/people/UnBox-Liquidation-San-Antonio-TX/61564372450843/" },

    { icon: Instagram, href: "https://www.instagram.com/unboxliquidation/" },
  ];

  const [estaDesplazado, setEstaDesplazado] = useState(false);
  const [menuMovilAbierto, setMenuMovilAbierto] = useState(false);

  useEffect(() => {
    const manejarDesplazamiento = () => {
      setEstaDesplazado(window.scrollY > 20);
    };
    window.addEventListener('scroll', manejarDesplazamiento);
    return () => window.removeEventListener('scroll', manejarDesplazamiento);
  }, []);

  const enlacesNavegacion = [
    { href: "#inicio", label: "Inicio" },
    { href: "#sobre-nosotros", label: "Sobre Nosotros" },
    { href: "#como-funciona", label: "Cómo Funciona" },
    { href: "#contacto", label: "Contacto" },
    { href: "#preguntas-frecuentes", label: "Preguntas Frecuentes" },
  ];

  return (
    <>
      {/* Barra de Navegación */}
      <nav className={`fixed w-full z-50 transition-all bg-white duration-300 ${estaDesplazado ? 'py-4 bg-white/95 backdrop-blur-sm shadow-lg' : 'py-6 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <img src="images/logo.jpg" width='160' alt="Logo del sitio" />
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {enlacesNavegacion.map((enlace, index) => (
                <motion.a
                  key={enlace.href}
                  href={enlace.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-accent hover:text-primary transition-colors font-medium"
                >
                  {enlace.label}
                </motion.a>
              ))}
              {enlacesSociales.map(({ icon: Icon, href }) => (
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  key={href}
                  href={href}
                  className="bg-light p-1 text-dark rounded-full hover:text-primary transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}

              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.tiktok.com/@unboxliquidationsatx'
                className="bg-light p-1 text-dark rounded-full hover:text-primary transition-colors"
              >
                <i className="fa fab fa-ticktock"></i>
              </a>
            </div>

            <button
              className="md:hidden text-accent"
              onClick={() => setMenuMovilAbierto(!menuMovilAbierto)}
            >
              {menuMovilAbierto ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuMovilAbierto && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t mt-4"
            >
              <div className="px-6 py-4 space-y-4">
                {enlacesNavegacion.map((enlace) => (
                  <a
                    key={enlace.href}
                    href={enlace.href}
                    className="block text-accent hover:text-primary transition-colors py-2"
                    onClick={() => setMenuMovilAbierto(false)}
                  >
                    {enlace.label}
                  </a>
                ))}
                {enlacesSociales.map(({ icon: Icon, href }) => (
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    key={href}
                    href={href}
                    className="bg-light p-1 text-dark rounded-full hover:text-primary transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}