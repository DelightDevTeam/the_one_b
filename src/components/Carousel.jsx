import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import useFetch from '../hooks/useFetch';
import BASE_URL from '../hooks/baseURL';

const Carousel = () => {
  // const banners = [b1, b2, b3, b4, b1];
  const {
    data: banners,
    error,
    loading,
  } = useFetch(BASE_URL + '/banner');
  // console.log('banner', banners)
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className='mySwiper'
      >
        {banners?.map((item, index) => {
          return (
            <SwiperSlide key={index} className='p-2 p-sm-3'>
              <img className='bannerImg  rounded-4' src={item.img_url} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
