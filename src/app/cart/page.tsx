'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useShop } from '@/context/ShopContext';
import styles from './Cart.module.css';

export default function CartPage() {
  const { allProducts, cartItems, removeFromCart, getTotalCartAmount } = useShop();

  const cartProducts = allProducts.filter((product) => cartItems[product.id] > 0);

  if (cartProducts.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <h1>Your Cart is Empty</h1>
        <p>Looks like you haven&apos;t added anything to your cart yet.</p>
        <Link href="/" className={styles.continueShopping}>
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.cart}>
      <h1>Shopping Cart</h1>

      <div className={styles.cartHeader}>
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      <hr />

      {cartProducts.map((product) => (
        <div key={product.id}>
          <div className={styles.cartItem}>
            <Image
              src={product.image}
              alt={product.name}
              width={80}
              height={100}
              className={styles.productImage}
            />
            <p className={styles.title}>{product.name}</p>
            <p>${product.new_price.toFixed(2)}</p>
            <p className={styles.quantity}>{cartItems[product.id]}</p>
            <p>${(product.new_price * cartItems[product.id]).toFixed(2)}</p>
            <button
              type="button"
              className={styles.removeBtn}
              onClick={() => removeFromCart(product.id)}
              aria-label={`Remove ${product.name} from cart`}
            >
              <Image
                src="/assets/cart_cross_icon.png"
                alt="Remove"
                width={20}
                height={20}
              />
            </button>
          </div>
          <hr />
        </div>
      ))}

      <div className={styles.cartSummary}>
        <div className={styles.totals}>
          <h2>Cart Totals</h2>
          <div className={styles.totalRow}>
            <p>Subtotal</p>
            <p>${getTotalCartAmount().toFixed(2)}</p>
          </div>
          <hr />
          <div className={styles.totalRow}>
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr />
          <div className={`${styles.totalRow} ${styles.grandTotal}`}>
            <h3>Total</h3>
            <h3>${getTotalCartAmount().toFixed(2)}</h3>
          </div>
          <button type="button" className={styles.checkoutBtn}>
            PROCEED TO CHECKOUT
          </button>
        </div>

        <div className={styles.promoCode}>
          <p>If you have a promo code, enter it here</p>
          <div className={styles.promoInput}>
            <input type="text" placeholder="Promo code" />
            <button type="button">Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
}
