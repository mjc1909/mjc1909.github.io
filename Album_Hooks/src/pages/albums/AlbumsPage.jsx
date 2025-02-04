import Albums from '../../components/Albums/Albums';
import useAlbums from '../../hooks/useAlbums';
import page from '../../styles/modules/page/page.module.css';



const AlbumsPage = () => {

    let pageStyles = `${page.wrapper}`;

    const {} = useAlbums()

    return (
        <div className={pageStyles}>
            <div>
            
               {Albums.title}
                
            <Albums />
                   

            </div>
        </div>
    );
};
export default AlbumsPage;