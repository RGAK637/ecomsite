'use client';

import Image from 'next/image';
import { useShop } from '@/context/ShopContext';
import styles from './ProductDisplay.module.css';

interface ProductDisplayProps {
  productId: number;
}

export default function ProductDisplay({ productId }: ProductDisplayProps) {
  const { allProducts, addToCart } = useShop();

  const product = allProducts.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className={styles.notFound}>
        <h1>Product Not Found</h1>
        <p>The product you&apos;re looking for doesn&apos;t exist.</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product.id);
  };

  return (
    <div className={styles.productDisplay}>
      <div className={styles.left}>
        <div className={styles.imageList}>
          {[1, 2, 3, 4].map((index) => (
            <Image
              key={index}
              src={product.image}
              alt={`${product.name} view ${index}`}
              width={80}
              height={100}
              className={styles.thumbnail}
            />
          ))}
        </div>
        <div className={styles.mainImage}>
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={600}
            priority
          />
        </div>
      </div>

      <div className={styles.right}>
        <h1>{product.name}</h1>

        <div className={styles.stars}>
          {[1, 2, 3, 4].map((star) => (
            <Image
              key={star}
              src="/assets/star_icon.png"
              alt="Star"
              width={20}
              height={20}
            />
          ))}
          <Image
            src="/assets/star_dull_icon.png"
            alt="Star"
            width={20}
            height={20}
          />
          <span>(122 reviews)</span>
        </div>

        <div className={styles.prices}>
          <span className={styles.oldPrice}>${product.old_price.toFixed(2)}</span>
          <span className={styles.newPrice}>${product.new_price.toFixed(2)}</span>
        </div>

        <p className={styles.description}>
          A stylish and comfortable piece perfect for any occasion.
          Made with high-quality materials for lasting durability.
        </p>

        <div className={styles.size}>
          <h3>Select Size</h3>
          <div className={styles.sizeOptions}>
            {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
              <button key={size} type="button">
                {size}
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          className={styles.addToCart}
          onClick={handleAddToCart}
        >
          ADD TO CART
        </button>

        <div className={styles.category}>
          <p><span>Category:</span> {product.category}</p>
          <p><span>Tags:</span> Modern, Latest</p>
        </div>
      </div>
    </div>
  );
}
