import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "What is liquidation?",
        answer: "Liquidation is the process of selling surplus, overstock, returned, or closeout merchandise at a discounted price.",
    },
    {
        question: "Where do you source your pallets and truckloads?",
        answer: "We source our pallets and truckloads from major retailers, wholesalers, and manufacturers who need to clear out inventory.",
    },
    {
        question: "Are your pallets new or used items?",
        answer: "It depends. Some pallets contain brand-new, unopened items, while others include customer returns, shelf pulls, or damaged boxes.",
    },
    {
        question: "How can I buy a pallet or truckload?",
        answer: "You can visit our warehouse, shop through our website, or contact us directly to check available inventory.",
    },
    {
        question: "Do you offer shipping?",
        answer: "Yes, we offer shipping options. Shipping costs depend on the destination and size of the order. Local pickup is also available.",
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept cash, credit/debit cards, Zelle, and wire transfers. Full payment is required before pickup or shipment.",
    },
    {
        question: "Can I inspect the pallets before purchasing?",
        answer: "Yes, we encourage customers to inspect the pallets in person before buying, as all sales are final.",
    },
    {
        question: "Do you offer refunds or exchanges?",
        answer: "No, all sales are final. We provide as much detail as possible about each pallet, but liquidation inventory is sold 'as-is'.",
    },
    {
        question: "Are the items guaranteed to work?",
        answer: "We do not guarantee the functionality of all items. Some items may be fully functional, while others may need repairs. It’s important to factor this into your purchasing decision.",
    },
    {
        question: "Do you offer bulk discounts?",
        answer: "Yes! We offer special pricing for bulk purchases. Contact us for details on truckload pricing.",
    },
    {
        question: "Do I need a business license to buy from you?",
        answer: "No, anyone can buy from us! However, if you have a resale certificate, you may be eligible for tax-exempt purchases.",
    },
    {
        question: "Can I resell liquidation items?",
        answer: "Absolutely! Many of our customers run resale businesses on platforms like Amazon, eBay, Facebook Marketplace, flea markets, and retail stores.",
    },
    {
        question: "How often do you get new inventory?",
        answer: "We receive shipments regularly, and our inventory is always changing. Follow us on social media or join our mailing list for updates on new arrivals.",
    },
    {
        question: "Do you provide manifests for pallets?",
        answer: "Some pallets come with a manifest (list of included items), while others are unmanifested. Each listing will specify whether a manifest is available.",
    },
    {
        question: "How can I contact you for more information?",
        answer: "You can reach us via phone, email, or social media. Visit our contact page for details.",
    },
];


const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-gray-100 py-16" id="faq">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
                <p className="text-gray-600 mt-4">Find answers to the most common questions about our liquidation business.</p>
            </div>
            <div className="max-w-4xl mx-auto mt-12 space-y-6">
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-lg p-5">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="flex justify-between items-center w-full text-left"
                        >
                            <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                            <motion.div
                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ChevronDown className="w-6 h-6 text-gray-600" />
                            </motion.div>
                        </button>
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <p className="mt-3 text-gray-700">{faq.answer}</p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
