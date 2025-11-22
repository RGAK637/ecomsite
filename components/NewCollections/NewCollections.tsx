import Item from '@/components/Item/Item';
import { newCollections } from '@/data/products';
import styles from './NewCollections.module.css';

export default function NewCollections() {
  return (
    <section className={styles.newCollections}>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className={styles.collections}>
        {newCollections.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
