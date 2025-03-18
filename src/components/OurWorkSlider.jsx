// src/components/OurWorkSlider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const OurWorkSlider = () => {
    const images = [
        'images/work/work (1).jpg',
        'images/work/work (2).jpg',
        'images/work/work (7).jpg',
        'images/work/work (11).jpg',
        'images/work/work (12).jpg',
        'images/work/work (13).jpg',
        'images/work/work (14).jpg',
        'images/work/work (15).jpg',
        'images/work/work (20).jpg',
        'images/work/work (21).jpg',
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-90 py-20 main-swiper">
            <h2 className="text-4xl font-bold text-center mb-10 text-accent">Our Work</h2>

            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                navigation={false}
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className="custom-swiper"
                style={{ height: '55vh' }}
                breakpoints={{
                    // When window width is >= 320px (mobile)
                    320: {
                        slidesPerView: 1, // Show 1 slide on mobile
                    },
                    // When window width is >= 768px (tablet)
                    980: {
                        slidesPerView: 2, // Show 2 slides on larger screens
                    },
                }}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} alt={`Slide ${index + 1}`} className="w-full h-80 rounded-lg shadow-lg object-cover" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default OurWorkSlider;