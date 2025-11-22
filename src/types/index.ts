export interface Product {
  id: number;
  name: string;
  category: 'women' | 'men' | 'kid';
  image: string;
  new_price: number;
  old_price: number;
}

export interface ShopContextType {
  allProducts: Product[];
  cartItems: Record<number, number>;
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  getTotalCartItems: () => number;
  getTotalCartAmount: () => number;
}
