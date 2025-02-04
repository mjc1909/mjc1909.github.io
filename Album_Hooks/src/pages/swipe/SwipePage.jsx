import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './swiper.module.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';



import {Autoplay, Navigation, Pagination } from 'swiper/modules';
import useAlbum from '../../hooks/useAlbum';
import { useEffect, useRef, useState } from 'react';
import SwiperOne from '../../components/Swiper/SwiperOne';
import { register } from 'swiper/element';


const SwiperComp = () => {

    return <div className={styles.swiperComp}>SwiperSlide</div>

}

const AlbumImageDetail = ({picture}) => {

        return <div className={styles.detail}>
               <p>Fotograf: {album?.title}</p>

               <p>Format: {picture?.format}</p>
               <p>Resolution: {picture?.width} x {picture?.height}</p>
            </div>
    
    }


const SwiperDynamic = ({name}) => {

    return <div className={styles.swiperComp}>{name}</div>

}

const ASwipeSlide = ({name}) => {

    return <SwiperSlide>
        <SwiperDynamic name="ET FULDT SLIDE COMPONENT"></SwiperDynamic>
    </SwiperSlide>


}


const SwipePage = () => {

    const {album, getAlbumById} = useAlbum();
    const [pictures, setPictures] = useState([])
    const [ourSwiper, setOurSwiper] = useState(null)
    const swiperRef = useRef(null);


    useEffect( () => {

        getAlbumById("675ee3953fe111c1af86386f")

    }, [])  
    
    useEffect( () => {

        setPictures(album.pictures)
    
        
    }, [album])    
    

    return (
        <div className={styles.swipecontainer}>

            <h1>{album?.title}</h1>
            <Swiper
                modules={[Navigation, Pagination,Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                ref={swiperRef} 
                spaceBetween={0}
                slidesPerView={1}
                navigation
                onSwiper={(swiper) => {
                    setOurSwiper(swiper)
                }}
                >

                 {
                    pictures?.map( (picture, index) => {
                        return <SwiperSlide className={styles.swiperslide} key={index}>
                            
                            <img className={styles.swipeimg} src={picture.path}></img>

                        </SwiperSlide>
                    })
                }
            </Swiper>


   



                
        </div>
    );
};
export default SwipePage;