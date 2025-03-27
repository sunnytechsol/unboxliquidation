import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function SeccionHero() {
  return (
    <section id="inicio" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 to-white pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              <span className='text-secondary'>Maximiza Tus</span>
              <span className="text-primary block">Ganancias de Liquidación</span>
            </h1>
            <p className="text-accent text-lg mb-8 max-w-lg">
              ¡Desbloquea ofertas increíbles en mercancía liquidada! En UnBox Liquidation SATX, ofrecemos productos
              de alta demanda a precios mayoristas, ayudando a revendedores y emprendedores a aumentar sus ingresos.
            </p>
            <a href='#contacto' className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-8 py-4 rounded-full flex items-center space-x-2 hover:bg-primary-dark transition-colors"
              >
                <span>Contáctanos</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <img
              src="images/sections/wherehouse.jpeg"
              alt="Pallets de liquidación al por mayor"
              className="rounded-2xl shadow-2xl"
              style={{
                height: window.innerWidth <= 768 ? '280px' : '320px',
              }}
            />

            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="font-semibold">Pallets Vendidos</span>
              </div>
              <p className="text-3xl font-bold">1200+</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-1/2 right-0 w-64 h-64 bg-secondary/20 rounded-full filter blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-50 -z-10"></div>
    </section>
  );
}