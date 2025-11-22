import Image from 'next/image';
import Link from 'next/link';
import styles from './Offers.module.css';

export default function Offers() {
  return (
    <section className={styles.offers}>
      <div className={styles.offersLeft}>
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <Link href="/womens">
          <button type="button">Check Now</button>
        </Link>
      </div>
      <div className={styles.offersRight}>
        <Image
          src="/assets/exclusive_image.png"
          alt="Exclusive offers"
          width={400}
          height={500}
        />
      </div>
    </section>
  );
}
