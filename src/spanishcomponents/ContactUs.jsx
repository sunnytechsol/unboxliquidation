import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus('Message Sent Successfully!');
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
    } else {
      setStatus('Failed to send message. Please try again.');
    }
  };
  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Lado izquierdo - Información de contacto */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-6 text-accent">Contáctanos</h2>
            <p className="text-accent/80 mb-8 text-lg">
              ¿Tienes preguntas o necesitas ayuda para seleccionar el pallet correcto? ¡Contáctanos hoy mismo y comienza a maximizar tus ganancias!
            </p>
  
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-accent">Teléfono</div>
                  <div className="text-accent/80">+1 726-210-7616</div>
                </div>
              </div>
  
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-accent">Correo Electrónico</div>
                  <div className="text-accent/80">unboxliquidation@gmail.com</div>
                </div>
              </div>
  
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-accent">Oficina</div>
                  <div className="text-accent/80">
                    1053 Grubb Rd, 78219, San Antonio, TX <br /> Estados Unidos, Texas
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
  
          {/* Lado derecho - Formulario de contacto */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl shadow-xl p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-accent mb-2">Nombre</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-accent mb-2">Apellido</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
  
              <div>
                <label className="block text-sm font-medium text-accent mb-2">Correo Electrónico</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
  
              <div>
                <label className="block text-sm font-medium text-accent mb-2">Mensaje</label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>
  
              <motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
                className="w-full bg-primary text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-primary-dark transition-colors"
              >
                <span>Enviar Mensaje</span>
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
  
            {status && <p className="text-center text-sm mt-4 text-primary">{status}</p>}
          </motion.div>
        </div>
  
        {/* Sección del Mapa de Google */}
        <div className="mt-16">
          <iframe
            title="Mapa de Google"
            className="w-full h-80 rounded-2xl shadow-lg"
            frameBorder="0"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3474.675464937428!2d-98.41488142501294!3d29.438280247036932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865cf5d96d5527af%3A0xc47e601111546726!2sUnBox%20Liquidation%20San%20Antonio%20TX!5e0!3m2!1sen!2s!4v1741280934361!5m2!1sen!2s"
          ></iframe>
        </div>
      </div>
    </section>
  );
  
}
