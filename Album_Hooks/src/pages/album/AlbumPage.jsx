import useAlbum from '../../hooks/useAlbum';
import page from '../../styles/modules/page/page.module.css';
import Album from '../../components/Album/Album';
import { useParams } from 'react-router-dom';

const AlbumPage = () => {

    let pageStyles = `${page.wrapper}`;

    const params = useParams()

    const {} = useAlbum()

    return (
        <div className={pageStyles}>
            <div>
            
                

            <Album id={params.albumId}></Album>


            </div>
        </div>
    );
};
export default AlbumPage;