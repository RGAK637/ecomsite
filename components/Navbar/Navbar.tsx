'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useShop } from '@/context/ShopContext';
import styles from './Navbar.module.css';

type MenuKey = 'shop' | 'mens' | 'womens' | 'kids';

const navItems: { key: MenuKey; label: string; href: string }[] = [
  { key: 'shop', label: 'Shop', href: '/' },
  { key: 'mens', label: 'Men', href: '/mens' },
  { key: 'womens', label: 'Women', href: '/womens' },
  { key: 'kids', label: 'Kids', href: '/kids' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { getTotalCartItems } = useShop();
  const [activeMenu, setActiveMenu] = useState<MenuKey>('shop');

  const getActiveMenu = (): MenuKey => {
    if (pathname === '/') return 'shop';
    if (pathname.startsWith('/mens')) return 'mens';
    if (pathname.startsWith('/womens')) return 'womens';
    if (pathname.startsWith('/kids')) return 'kids';
    return activeMenu;
  };

  const currentMenu = getActiveMenu();

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/assets/logo.png"
          alt="Shopper logo"
          width={52}
          height={52}
        />
        <p>Shopper</p>
      </Link>

      <ul className={styles.navMenu}>
        {navItems.map(({ key, label, href }) => (
          <li key={key} onClick={() => setActiveMenu(key)}>
            <Link href={href}>{label}</Link>
            {currentMenu === key && <hr />}
          </li>
        ))}
      </ul>

      <div className={styles.navLoginCart}>
        <Link href="/login">
          <button type="button">Login</button>
        </Link>
        <Link href="/cart" className={styles.cartLink}>
          <Image
            src="/assets/cart_icon.png"
            alt="Shopping cart"
            width={35}
            height={35}
          />
          <span className={styles.cartCount}>{getTotalCartItems()}</span>
        </Link>
      </div>
    </nav>
  );
}
