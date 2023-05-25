import facebook from '../../assets/icones/facebook.svg';
import twitter from '../../assets/icones/twitter.svg';
import instagram from '../../assets/icones/instagram.svg';
import styles from './Footer.module.scss'; 


export default function Footer() {
  return (
    <footer className={styles.rodape}>
        <div className={styles.rodape__icons}>
            <a href="https://www.facebook.com/AluraCursosOnline/" target="_blank" rel="noeferrer">
                <img src={facebook} alt="Facebook"/>
            </a>
            <a href="https://twitter.com/aluraonline?lang=en" target="_blank" rel="noeferrer">
                <img src={twitter} alt="Twitter"/>
            </a>
            <a href="https://www.instagram.com/aluraonline/?hl=en" target="_blank" rel="noeferrer">
                <img src={instagram} alt="Instagram"/>
            </a>
        </div>
        <p>Desenvolvido por Alura.</p>
    </footer>
  )
}
