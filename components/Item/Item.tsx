import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import styles from './Item.module.css';

interface ItemProps {
  product: Product;
}

export default function Item({ product }: ItemProps) {
  const { id, name, image, new_price, old_price } = product;

  return (
    <Link href={`/product/${id}`} className={styles.item}>
      <Image
        src={image}
        alt={name}
        width={300}
        height={350}
        className={styles.image}
      />
      <p className={styles.name}>{name}</p>
      <div className={styles.prices}>
        <span className={styles.newPrice}>${new_price.toFixed(2)}</span>
        <span className={styles.oldPrice}>${old_price.toFixed(2)}</span>
      </div>
    </Link>
  );
}
