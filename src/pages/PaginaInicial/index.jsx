import Header from 'components/Header';
import Menu from 'components/Menu';
import FullBanner from 'components/FullBanner';
import styles from './PaginaInicial.module.scss';
import Footer from 'components/Footer';
import Gallery from 'components/Gallery';
import Populares from 'components/Populares';

export default function PaginaInicial(){
    return (
        <>
            <Header />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <FullBanner />
                </section>
                <div className={styles.gallery}>
                    <Gallery />
                    <Populares />
                </div>
            </main>
            <Footer />
        </>
    )
}