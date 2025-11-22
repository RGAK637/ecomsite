import { ShopCategory } from '@/components';

export const metadata = {
  title: "Men's Collection - Shopper",
  description: "Explore our latest men's fashion collection",
};

export default function MensPage() {
  return (
    <ShopCategory
      category="men"
      banner="/assets/banner_mens.png"
    />
  );
}
