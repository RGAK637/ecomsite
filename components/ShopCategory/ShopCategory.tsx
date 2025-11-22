'use client';

import Image from 'next/image';
import { useShop } from '@/context/ShopContext';
import Item from '@/components/Item/Item';
import styles from './ShopCategory.module.css';

interface ShopCategoryProps {
  category: 'women' | 'men' | 'kid';
  banner: string;
}

export default function ShopCategory({ category, banner }: ShopCategoryProps) {
  const { allProducts } = useShop();

  const filteredProducts = allProducts.filter(
    (product) => product.category === category
  );

  return (
    <div className={styles.shopCategory}>
      <Image
        src={banner}
        alt={`${category} category banner`}
        width={1200}
        height={300}
        className={styles.banner}
        priority
      />

      <div className={styles.indexSort}>
        <p>
          <span>Showing 1-{filteredProducts.length}</span> out of {filteredProducts.length} products
        </p>
        <div className={styles.sort}>
          Sort by{' '}
          <Image
            src="/assets/dropdown_icon.png"
            alt="Sort dropdown"
            width={16}
            height={16}
          />
        </div>
      </div>

      <div className={styles.products}>
        {filteredProducts.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
