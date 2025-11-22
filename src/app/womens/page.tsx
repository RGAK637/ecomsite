import { ShopCategory } from '@/components';

export const metadata = {
  title: "Women's Collection - Shopper",
  description: "Explore our latest women's fashion collection",
};

export default function WomensPage() {
  return (
    <ShopCategory
      category="women"
      banner="/assets/banner_women.png"
    />
  );
}
