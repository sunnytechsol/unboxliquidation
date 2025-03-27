
import React from 'react';



const OurProducts = () => {
    return (
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-6 text-accent text-center mb-15">Our Products</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 flex justify-center items-center">
                    <div className="flex justify-center items-center">
                        <img src="images/fwdlogos/amazone.png" alt="Walmart" className="w-32 h-auto filter grayscale brightness-90"  />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src="images/fwdlogos/costway.png" alt="costway" className="w-32 h-auto filter grayscale brightness-90"  />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src="images/fwdlogos/target.png" alt="target" className="w-32 h-auto filter grayscale brightness-90"  />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src="images/fwdlogos/walmart.png" alt="walmart" className="w-32 h-auto filter grayscale brightness-90"  />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurProducts;