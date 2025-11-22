import ProductDisplay from '@/components/ProductDisplay/ProductDisplay';

export function generateStaticParams() {
  return Array.from({ length: 36 }, (_, i) => ({
    id: String(i + 1),
  }));
}

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const productId = Number(params.id);

  return <ProductDisplay productId={productId} />;
}
