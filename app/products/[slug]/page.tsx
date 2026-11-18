import { notFound } from "next/navigation";
import { products } from "@/lib/products-data";
import { ProductDetailClient } from "@/components/products/product-detail-client";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.id,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.id === slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}
