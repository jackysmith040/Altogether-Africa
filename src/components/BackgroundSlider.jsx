
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import imageSlide from '../data/data';
import '../index.css';
import { Link } from 'react-router-dom';

const BackgroundSlider = () => {
  return (
    <div className='h-screen relative w-full'>
    <Swiper
      spaceBetween={30}
      effect={'fade'}
      navigation={false}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Navigation, Pagination, Autoplay]}
      className="mySwiper w-full h-full"
    >
      {imageSlide.map((slide, index) => (
        <SwiperSlide key={index} className='w-full h-full'>
            <div className='w-full h-full' 
            style={{
                backgroundImage: `url(${slide.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="absolute inset-0  bg-gradient-to-t from-black/90  to-black/15 flex flex-col px-16 items-center justify-center p-4">
                    <h2 className="text-white text-6xl font-extrabold uppercase mb-2 tracking-[5px]">{slide.title}</h2>
                    <p className="text-gray-300 text-2xl font-light mb-4">{slide.description}</p>
                    <Link to={slide.link} className='border border-[#325d90] px-7 py-3 mt-4 uppercase text-md text-[#fff] font-semibold bg-primary rounded-md'>
                    {slide.linkText}
                    </Link>
                </div>
            </div>
        </SwiperSlide>
      ))}  
    </Swiper>
  </div>
  )
}

export default BackgroundSlider