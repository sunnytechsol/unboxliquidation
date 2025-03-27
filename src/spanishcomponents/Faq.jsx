import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
const faqs = [
    {
        question: "¿Qué es la liquidación?",
        answer: "La liquidación es el proceso de vender mercancía excedente, sobrestock, devoluciones o productos de cierre a un precio con descuento.",
    },
    {
        question: "¿De dónde obtienen sus pallets y cargas completas?",
        answer: "Obtenemos nuestros pallets y cargas completas de minoristas importantes, mayoristas y fabricantes que necesitan liquidar inventario.",
    },
    {
        question: "¿Sus pallets contienen artículos nuevos o usados?",
        answer: "Depende. Algunos pallets contienen artículos nuevos y sin abrir, mientras que otros incluyen devoluciones de clientes, productos retirados de estanterías o cajas dañadas.",
    },
    {
        question: "¿Cómo puedo comprar un pallet o carga completa?",
        answer: "Puedes visitar nuestro almacén, comprar a través de nuestro sitio web o contactarnos directamente para consultar el inventario disponible.",
    },
    {
        question: "¿Ofrecen envíos?",
        answer: "Sí, ofrecemos opciones de envío. Los costos dependen del destino y el tamaño del pedido. También está disponible la recogida local.",
    },
    {
        question: "¿Qué métodos de pago aceptan?",
        answer: "Aceptamos efectivo, tarjetas de crédito/débito, Zelle y transferencias bancarias. Se requiere el pago completo antes de la recogida o envío.",
    },
    {
        question: "¿Puedo inspeccionar los pallets antes de comprar?",
        answer: "Sí, recomendamos a los clientes que inspeccionen los pallets en persona antes de comprar, ya que todas las ventas son finales.",
    },
    {
        question: "¿Ofrecen reembolsos o cambios?",
        answer: "No, todas las ventas son finales. Proporcionamos la mayor cantidad de detalles posible sobre cada pallet, pero el inventario de liquidación se vende 'tal cual'.",
    },
    {
        question: "¿Los artículos están garantizados como funcionales?",
        answer: "No garantizamos el funcionamiento de todos los artículos. Algunos pueden funcionar perfectamente, mientras que otros pueden necesitar reparaciones. Es importante considerar esto al tomar tu decisión de compra.",
    },
    {
        question: "¿Ofrecen descuentos por volumen?",
        answer: "¡Sí! Ofrecemos precios especiales para compras al por mayor. Contáctenos para detalles sobre precios de cargas completas.",
    },
    {
        question: "¿Necesito una licencia comercial para comprarles?",
        answer: "No, ¡cualquiera puede comprarnos! Sin embargo, si tienes un certificado de reventa, podrías ser elegible para compras exentas de impuestos.",
    },
    {
        question: "¿Puedo revender artículos de liquidación?",
        answer: "¡Absolutamente! Muchos de nuestros clientes tienen negocios de reventa en plataformas como Amazon, eBay, Facebook Marketplace, mercados de pulgas y tiendas minoristas.",
    },
    {
        question: "¿Con qué frecuencia reciben nuevo inventario?",
        answer: "Recibimos envíos regularmente y nuestro inventario cambia constantemente. Síguenos en redes sociales o únete a nuestra lista de correo para recibir actualizaciones sobre nuevas llegadas.",
    },
    {
        question: "¿Proporcionan manifiestos para los pallets?",
        answer: "Algunos pallets incluyen un manifiesto (lista de artículos incluidos), mientras que otros no. Cada listado especificará si hay un manifiesto disponible.",
    },
    {
        question: "¿Cómo puedo contactarlos para más información?",
        answer: "Puedes comunicarte con nosotros por teléfono, correo electrónico o redes sociales. Visita nuestra página de contacto para más detalles.",
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
