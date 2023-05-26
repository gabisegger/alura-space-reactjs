import photosPopulares from './photos.populares.json';
import styles from './Populares.module.scss';

export default function Populares() {
  return (
    <aside className={styles.populares}>
        <h2>Populares</h2>
        <ul className={styles.populares__images}>
           {photosPopulares.map((photoPopular) => {
                return (
                    <li key={photoPopular.id}>
                        <img src={photoPopular.path} alt={photoPopular.alt} />
                    </li>
                );
           })} 
        </ul>
        <button>Ver mais fotos</button>
    </aside>
  )
}
