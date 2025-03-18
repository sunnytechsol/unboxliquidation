import React from 'react';
import { motion } from 'framer-motion';
import { Search, Package, ShoppingCart, Repeat } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "Find the Best Deals",
      description: "Browse our liquidation pallets to discover high-value merchandise at unbeatable prices."
    },
    {
      icon: Package,
      title: "Choose Your Pallet",
      description: "Select the pallet that fits your needs, whether for resale or personal use."
    },
    {
      icon: ShoppingCart,
      title: "Make Your Purchase",
      description: "Buy your pallet easily with multiple payment options, including cash, cards, and digital payments."
    },
    {
      icon: Repeat,
      title: "Resell & Profit",
      description: "Sell items individually or in bulk, maximize your profits, and come back for more!"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-accent">How It Works</h2>
          <p className="text-accent/80 max-w-2xl mx-auto text-lg">
            Get started with liquidation in just a few simple steps. Find great deals, buy, resell, and repeat!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
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
                  <h3 className="text-xl font-bold mb-4 text-accent">{step.title}</h3>
                  <p className="text-accent/80">{step.description}</p>

                  {index < steps.length - 1 && (
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
