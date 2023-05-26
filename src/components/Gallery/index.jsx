import Tags from "../Tags";
import photos from "./photos.json";
import styles from "./Gallery.module.scss";
import { AiOutlineHeart, AiOutlineArrowsAlt } from 'react-icons/ai';

export default function Gallery() {
  return (
    <section className={styles.gallery}>
        <h2>Navegue pela galeria</h2>
        <Tags />
        <ul className={styles.gallery__cards}>
            {photos.map((photo) => {
                return(
                    <li key={photo.id} className={styles.gallery__card}>
                        <img
                            className={styles.gallery__image}
                            src={photo.image}
                            alt={photo.title}
                        />
                        <p className={styles.gallery__description}>{photo.title}</p>
                        <div>
                            <p>{photo.creditos}</p>
                            <span>
                                <AiOutlineHeart color="#fff" size={25} />
                                <AiOutlineArrowsAlt color="#fff" size={25} />
                            </span>
                        </div>
                    </li>
                );
            })}
        </ul>
    </section>
  )
}
