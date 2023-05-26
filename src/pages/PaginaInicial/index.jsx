import Header from '../../components/Header';
import Menu from '../../components/Menu';
import FullBanner from '../../components/FullBanner';
import styles from './PaginaInicial.module.scss';
import Footer from '../../components/Footer';
import Gallery from '../../components/Gallery';

export default function PaginaInicial(){
    return (
        <>
            <Header />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <FullBanner />
                </section>
            </main>
            <div className={styles.gallery}>
                <Gallery />
            </div>
            <Footer />
        </>
    )
}