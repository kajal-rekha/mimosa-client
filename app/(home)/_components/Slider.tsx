'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import { data } from '@/data/sliderContents';
import Image from 'next/image';

const Slider = () => {
  return (
    <section className='h-[calc(100vh-5rem)]'>
      <Swiper
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        grabCursor={true}
        speed={500}
        modules={[Navigation, Pagination, Autoplay]}
        className='mySwiper h-full w-full'
      >
        {data.map((slide) => (
          <SwiperSlide key={slide.id} className='h-full w-full'>
            <Image
              src={slide.image}
              alt={slide.heading}
              width={1125}
              height={750}
              className='h-full w-full object-cover'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
