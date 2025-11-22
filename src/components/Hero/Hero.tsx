import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroLeft}>
        <h2>New Arrivals Only</h2>
        <div className={styles.heroTitle}>
          <div className={styles.handIcon}>
            <p>new</p>
            <Image
              src="/assets/hand_icon.png"
              alt="Hand wave"
              width={105}
              height={105}
            />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <Link href="/womens" className={styles.latestBtn}>
          <span>Latest Collection</span>
          <Image
            src="/assets/arrow.png"
            alt="Arrow"
            width={24}
            height={24}
          />
        </Link>
      </div>
      <div className={styles.heroRight}>
        <Image
          src="/assets/hero_image.png"
          alt="Hero fashion model"
          width={500}
          height={600}
          priority
        />
      </div>
    </section>
  );
}
