import { AiOutlineHeart, AiOutlineArrowsAlt } from 'react-icons/ai';

export default function Card({ item, styles }) {
  return (
    <li key={item.id} className={styles.gallery__card}>
        <img
            className={styles.gallery__image}
            src={item.image}
            alt={item.title}
        />
        <p className={styles.gallery__description}>{item.title}</p>
        <div>
            <p>{item.creditos}</p>
            <span>
                <AiOutlineHeart color="#fff" size={25} />
                <AiOutlineArrowsAlt color="#fff" size={25} />
            </span>
        </div>
    </li>
  )
}
