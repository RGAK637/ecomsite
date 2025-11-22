'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Product, ShopContextType } from '@/types';
import { allProducts } from '@/data/products';

const ShopContext = createContext<ShopContextType | null>(null);

interface ShopProviderProps {
  children: ReactNode;
}

const getDefaultCart = (): Record<number, number> => {
  const cart: Record<number, number> = {};
  for (let i = 1; i <= allProducts.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

export function ShopProvider({ children }: ShopProviderProps) {
  const [cartItems, setCartItems] = useState<Record<number, number>>(getDefaultCart);

  const addToCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: Math.max(0, prev[itemId] - 1) }));
  };

  const getTotalCartItems = (): number => {
    return Object.values(cartItems).reduce((total, count) => total + count, 0);
  };

  const getTotalCartAmount = (): number => {
    return Object.entries(cartItems).reduce((total, [itemId, quantity]) => {
      if (quantity > 0) {
        const product = allProducts.find((p) => p.id === Number(itemId));
        if (product) {
          return total + product.new_price * quantity;
        }
      }
      return total;
    }, 0);
  };

  const contextValue: ShopContextType = {
    allProducts,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartItems,
    getTotalCartAmount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
}

export function useShop(): ShopContextType {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
}

export default ShopContext;
