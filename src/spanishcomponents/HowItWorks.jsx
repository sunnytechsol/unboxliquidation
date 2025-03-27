import React from 'react';
import { motion } from 'framer-motion';
import { Search, Package, ShoppingCart, Repeat } from 'lucide-react';

export default function ComoFunciona() {
  const pasos = [
    {
      icon: Search,
      title: "Encuentra las Mejores Ofertas",
      description: "Explora nuestros pallets de liquidación para descubrir mercancía de alto valor a precios imbatibles."
    },
    {
      icon: Package,
      title: "Elige Tu Pallet",
      description: "Selecciona el pallet que mejor se adapte a tus necesidades, ya sea para reventa o uso personal."
    },
    {
      icon: ShoppingCart,
      title: "Realiza Tu Compra",
      description: "Compra tu pallet fácilmente con múltiples opciones de pago, incluyendo efectivo, tarjetas y pagos digitales."
    },
    {
      icon: Repeat,
      title: "Revende y Gana",
      description: "Vende los artículos individualmente o al por mayor, maximiza tus ganancias y ¡vuelve por más!"
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-accent">¿Cómo Funciona?</h2>
          <p className="text-accent/80 max-w-2xl mx-auto text-lg">
            Comienza con la liquidación en solo unos simples pasos. ¡Encuentra grandes ofertas, compra, revende y repite!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pasos.map((paso, index) => {
            const Icon = paso.icon;
            return (
              <motion.div
                key={paso.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-gray-50 rounded-2xl p-8 h-full hover:shadow-xl transition-shadow">
                  <div className="bg-secondary text-white w-12 h-12 rounded-full flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-accent">{paso.title}</h3>
                  <p className="text-accent/80">{paso.description}</p>

                  {index < pasos.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                      <div className="w-8 h-0.5 bg-secondary"></div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}