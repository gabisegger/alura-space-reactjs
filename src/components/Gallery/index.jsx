import Tags from "../Tags";
import Cards from "./Cards";
import photos from "./photos.json";
import styles from "./Gallery.module.scss";
import { useState } from "react";

export default function Gallery() {
  
  const [itens, setItens] = useState(photos);
  const tags = [...new Set(photos.map((valor) => valor.tag))]

  const filtraFotos = (tag) => {
    const newPhotos = photos.filter((photo) => {
      return photo.tag === tag;
    })

    setItens(newPhotos);
  }

  return (
    <section className={styles.gallery}>
        <h2>Navegue pela galeria</h2>
        <Tags tags={tags} filtraFotos={filtraFotos} setItens={setItens}/>
        <Cards itens={itens} styles={styles}/>
    </section>
  )
}
