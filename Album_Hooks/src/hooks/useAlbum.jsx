import { useEffect, useState } from "react";

const useAlbum = (id) => {

    const [album, setAlbum] = useState([]);
    const [loading, setLoading] = useState(false);
    const [picture, setPicture] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0)
    
    const getAlbum = async () => {

        setLoading(true)
        let response = await fetch(`https://photos.webmcdm.dk/album?id=${id}`);
        let result = await response.json();
        
        setTimeout( () => {

            setAlbum(result.data)
            setPicture(result.data.pictures[currentIndex])
            setLoading(false)

        }, 0) 
        

    }

    const getAlbumById = async (albumId) => {
        setLoading(true)
        let response = await fetch(`https://photos.webmcdm.dk/album?id=${albumId}`);
        let result = await response.json();
        
        setAlbum(result.data)
        setPicture(result.data.pictures[currentIndex])
        setLoading(false)

    } 

    const next = () => {
        setCurrentIndex((prevIndex) => {
            // Wrap around to the beginning if at the last picture
            const nextIndex = prevIndex + 1;
            return album.pictures && nextIndex >= album.pictures.length ? 0 : nextIndex;
        });
    };

    const previous = () => {
        setCurrentIndex((prevIndex) => {
            // Wrap around to the end if at the first picture
            const prevIndexWrapped = prevIndex - 1;
            return album.pictures && prevIndexWrapped < 0 ? album.pictures.length - 1 : prevIndexWrapped;
        });
    };

    const goto = (index) => {
        if (album.pictures && index >= 0 && index < album.pictures.length) {
            setCurrentIndex(index);
        } else {
            console.warn("Index out of range");
        }
    };

    useEffect(() => {
   
        getAlbum();

    }, []);  


    useEffect(() => {
   
        if(album.pictures)
        {
            setPicture(album.pictures[currentIndex])
        }

    }, [currentIndex]); 


    return {
      album,
      loading,
      picture,
      next,
      previous,
      goto,
      getAlbumById
    }
    
};
export default useAlbum;