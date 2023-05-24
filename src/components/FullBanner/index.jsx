import banner from './banner.png';
import styles from './FullBanner.module.scss';

export default function FullBanner() {
    return (
        <div className={styles.banner}>
            <h1>A galeria mais completa do espaço</h1>
            <img src={banner} alt="A imagem da terra vista do espaço"/>
        </div>
    )
}
