import { useEffect, useState } from "react";
import useAlbum from "../../hooks/useAlbum";
import { SwiperSlide, Swiper } from "swiper/react";
import styles from './swiper.module.css'

const SwiperComp = () => {

    return <div className={styles.swiperComp}>SwiperSlide</div>

}

const SwiperImage = () => {

    return <div className={styles.swiperComp}><img src="/MCDM_Logo.jpg"></img></div>

}

const SwiperDynamic = ({name}) => {

    return <div className={styles.swiperComp}>{name}</div>

}


const SwiperOne = () => {

    const {album, getAlbumById} = useAlbum();
    const [pictures, setPictures] = useState([])

    useEffect( () => {

        getAlbumById("675ee3953fe111c1af86386f")

    }, [])  
    
    useEffect( () => {

        setPictures(album.pictures)

    }, [album])

    return (
        <div>

            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
            >

                <SwiperSlide>
                    <SwiperComp></SwiperComp>
                </SwiperSlide>

                <SwiperSlide>
                    <SwiperImage></SwiperImage>
                </SwiperSlide>

                <SwiperSlide>
                    <SwiperDynamic name={"DYNAMIC SWIPE DATA"}></SwiperDynamic>
                </SwiperSlide>

                <SwiperSlide>
                    <SwiperComp></SwiperComp>
                </SwiperSlide>

             
            </Swiper>
        </div>
    );
};
export default SwiperOne;