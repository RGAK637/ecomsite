import { ShopCategory } from '@/components';

export const metadata = {
  title: "Kids' Collection - Shopper",
  description: "Explore our latest kids' fashion collection",
};

export default function KidsPage() {
  return (
    <ShopCategory
      category="kid"
      banner="/assets/banner_kids.png"
    />
  );
}
