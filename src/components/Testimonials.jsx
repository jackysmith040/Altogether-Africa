import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import Image1 from '/images/4.jpg';
import Image2 from '/images/3.jpg';
import Image3 from '/images/2.jpg';
import Image4 from '/images/1.jpg';
import { Star, Quote } from 'lucide-react'; // Assuming you're using lucide-react icons

const Testimonials = () => { 
    const testimonials = [
        {
            image: Image1,
            name: "Chike Obi",
            title: "CEO, Horizon Ventures Africa",
            text: "Their service transformed our business. Highly recommended!"
        },
        {
            image: Image2,
            name: "Leroy Thompson",
            title: "Director, African-Tech Solutions",
            text: "A professional team that delivers results beyond expectations."
        },
        {
            image: Image3,
            name: "Desmond Osei",
            title: "Manager, Aspire Global",
            text: "Exceptional work! Our collaboration was smooth and impactful."
        },
        {
            image: Image4,
            name: "Samuel Boateng",
            title: "Founder, Global Innovations Inc.",
            text: "Innovative and forward-thinking—exactly what we needed."
        }
    ];

    return(
        <div className='py-16 px-4 lg:px-20 '>
            <Swiper
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <div className="max-w-sm mx-auto bg-white shadow-md rounded-xl overflow-hidden py-6 border border-gray-200">
                            <div className="p-6">
                                {/* Quote icon */}
                                <div className="flex justify-center mb-4">
                                    <div className="bg-blue-100 rounded-full p-3">
                                        <Quote className="w-6 h-6 text-primary" />
                                    </div>
                                </div>
                                {/* Testimonial text */}
                                <p className="text-center text-gray-700 font-light mb-4">
                                    {testimonial.text}
                                </p>
                                {/* Stars */}
                                <div className="flex justify-center mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 mr-1" />
                                    ))}
                                </div>
                                {/* Profile */}
                                <div className="flex items-center justify-center mt-4">
                                    <img className="w-12 h-12 rounded-full object-cover mr-4" src={testimonial.image} alt={testimonial.name} />
                                    <div className="text-center">
                                        <h5 className="text-xl font-semibold">{testimonial.name}</h5>
                                        <p className="text-sm text-primary">{testimonial.title}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Testimonials;
