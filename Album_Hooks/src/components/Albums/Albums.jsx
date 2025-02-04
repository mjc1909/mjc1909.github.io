import { Link } from "react-router-dom";
import useAlbums from "../../hooks/useAlbums";
import styles from "./albums.module.css";
import { icons } from "../../services/icons";

const Albums = ({ id }) => {
    const { albums } = useAlbums("675ee37d3fe111c1af863864");


    return (
        <div className={styles.albums}>
            {albums.length > 0 ? (
                albums.map((album) => (
                    <div key={album.id} className={styles.album}>
                        <h3>{album?.title}</h3>

                        <Link to={`/album/${album?._id}`}> See Album {icons["FaArrowRight"]}</Link>
                        <p className={styles.date}>{album?.created}</p>
                    

                    </div>
                ))
            ) : (
                <p>No albums found.</p>
            )}
        </div>
    );
};

export default Albums;
