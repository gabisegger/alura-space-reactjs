import logo from './logo.svg';
import search from './search.svg';
import styles from './Header.module.scss';

export default function Header(){
    return(
        <header className={styles.header}>
            <img src={logo} alt="Logo do Alura Space" />
            <div className={styles.header__container}>
                <input
                    className={styles.header__input}
                    type="text" 
                    placeholder="O você procura?"
                />
                <img src={search} alt="ícone de lupa" />
            </div>
        </header>
    )
}