import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { EffectFlip, Pagination, Navigation, Autoplay } from 'swiper/modules';

import Slide1 from '/images/background3.jpg';
import Slide2 from '/images/image4.jpg';


const CarouselSlide = () => {
  return (
    <div className='w-full h-full'>
      <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={false}
        navigation={false}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[EffectFlip, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Slide1} alt='slide 1' className=" w-full h-[350px] object-cover rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide2} alt='slide2' className=" w-full h-[350px] object-cover rounded-lg" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default CarouselSlide