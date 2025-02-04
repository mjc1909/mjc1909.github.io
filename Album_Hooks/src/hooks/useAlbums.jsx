import { useEffect, useState } from "react";

const useAlbums = (id) => {
    const [albums, setAlbums] = useState([]);

    const getAlbums = async () => {
        
        
        let response = await fetch(`https://photos.webmcdm.dk/albums?catalog=${id}`);
        let result = await response.json();
        setAlbums(result.data);
        
        
        
    };

    useEffect(() => {
    
    getAlbums();
    }, []);
    

    return { albums, };
};

export default useAlbums;
