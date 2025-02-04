import styles from './album.module.css';
import useAlbum from '../../hooks/useAlbum';
import { ClipLoader } from 'react-spinners';
import { icons } from "../../services/icons";

const Album = ({ id }) => {
    const { album, picture, next, previous, goto, currentIndex, loading } = useAlbum(id);

    const AlbumImageDetail = ({picture}) => {

        return <div className={styles.detail}>
               <p>Fotograf: {album?.title}</p>

               <p>Format: {picture?.format}</p>
               <p>Resolution: {picture?.width} x {picture?.height}</p>
            </div>
    
    }

    return (
        <div className={styles.album}>
            {loading ? (
                <ClipLoader
                    color={"red"}
                    loading={loading}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            ) : (
                <h1>{album?.title || "Album"}</h1>
            )}

            <img src={picture?.path} alt={album?.title || "Picture"} />
            <AlbumImageDetail picture={picture}></AlbumImageDetail>

            <div className={styles.goto}>
                <button onClick={previous}>
                    {icons["FaArrowLeft"]} PREVIOUS
                </button>

                {Array.from({ length: album?.pictures?.length || 0 }, (_, index) => (
                    <button
                        key={index}
                        className={currentIndex === index ? styles.active : ''}
                        onClick={() => {
                            return goto(index);
                        }}
                    >
                        {index + 1}
                    </button>
                ))}

                <button onClick={next}>
                    NEXT {icons["FaArrowRight"]}
                </button>
            </div>
        </div>
    );
};

export default Album;
