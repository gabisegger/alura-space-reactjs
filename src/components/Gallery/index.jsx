import Tags from "../Tags";
import Cards from "./Cards";
import photos from "./photos.json";
import styles from "./Gallery.module.scss";

export default function Gallery() {
  return (
    <section className={styles.gallery}>
        <h2>Navegue pela galeria</h2>
        <Tags />
        <Cards itens={photos} styles={styles}/>
    </section>
  )
}
