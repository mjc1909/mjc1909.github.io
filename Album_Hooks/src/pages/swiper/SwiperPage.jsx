// import Swiper core and required modules
import {Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import styles from './swiperpage.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import Album from '../../components/Album/Album';
import useAlbum from '../../hooks/useAlbum';
import { EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

export default () => {
  return (
    <Swiper className={styles.swiper}
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,EffectFade,Autoplay]}
      effect="fade"
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className={styles.slide1}>
       <img src="https://images.unsplash.com/photo-1623333769926-a34d46b5fbdb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </SwiperSlide>
      <SwiperSlide className={styles.slide1}>
       <img src="https://images.unsplash.com/photo-1668365187350-05c997d09eba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </SwiperSlide>
      <SwiperSlide className={styles.slide1}>
        <img src="https://images.unsplash.com/photo-1732740676396-ece9a9148342?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </SwiperSlide>
      <SwiperSlide className={styles.slide1}>
        <img src="https://images.unsplash.com/photo-1734526040622-a3e96b679f80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </SwiperSlide>
      ...
    </Swiper>
  );
};



/*<SwiperSlide className={styles.slide1}>
       <img src="https://images.unsplash.com/photo-1668365187350-05c997d09eba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </SwiperSlide>
      <SwiperSlide className={styles.slide1}>
        <img src="https://images.unsplash.com/photo-1731946660299-8f091eb1caee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </SwiperSlide>
      <SwiperSlide className={styles.slide1}>
        <img src="https://images.unsplash.com/photo-1734275689167-5f458aacde63?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </SwiperSlide>
      <SwiperSlide className={styles.slide1}>
       <img src="https://images.unsplash.com/photo-1623333769926-a34d46b5fbdb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </SwiperSlide> */