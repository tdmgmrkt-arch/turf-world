import { notFound } from "next/navigation";
import { supplies } from "@/lib/supplies-data";
import { SupplyDetailClient } from "@/components/supplies/supply-detail-client";

export async function generateStaticParams() {
  return supplies.map((supply) => ({
    slug: supply.id,
  }));
}

export default async function SupplyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supply = supplies.find((s) => s.id === slug);

  if (!supply) {
    notFound();
  }

  return <SupplyDetailClient supply={supply} />;
}
