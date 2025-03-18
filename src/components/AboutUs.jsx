import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Users } from 'lucide-react';

export default function AboutUs() {
  const stats = [
    { icon: Shield, label: "Military Discount", value: "15+" },
    { icon: Award, label: "Loyalty Program", value: "50+" },
    { icon: Users, label: "Customers", value: "700+" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl text-secondary font-bold mb-6">
              Smart Buying,
              <span className="text-primary"> Bigger Profits</span>
            </h2>
            <p className="text-accent text-lg mb-8">
              At UnBox Liquidation SATX, we help resellers and entrepreneurs maximize their earnings by
              providing high-quality liquidation pallets at unbeatable prices. Whether you're starting a
              business or scaling up, we make buying and reselling easier than ever.
            </p>
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map(({ icon: Icon, label, value }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-accent">{value}</div>
                  <div className="text-accent/80 text-sm">{label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <img
              src="images/profit1.jpg"
              alt="Bulk liquidation inventory"
              className="rounded-xl shadow-lg w-full"
              style={{height: '180px', objectFit: 'cover'}}
            />

            <img
              src="images/profit3.jpg"
              alt="Bulk liquidation inventory"
              className="rounded-xl shadow-lg w-full"
              style={{height: '180px', objectFit: 'cover'}}

            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}