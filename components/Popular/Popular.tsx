import Item from '@/components/Item/Item';
import { popularProducts } from '@/data/products';
import styles from './Popular.module.css';

export default function Popular() {
  return (
    <section className={styles.popular}>
      <h1>Popular in Women</h1>
      <hr />
      <div className={styles.popularItems}>
        {popularProducts.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
