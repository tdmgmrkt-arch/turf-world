"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Eye, Check } from "lucide-react";
import type { Product } from "@/lib/products-data";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-forest-200 transition-all duration-300 hover:-translate-y-1">
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-4 left-4 z-10">
          <Badge
            variant="default"
            className="text-xs font-bold shadow-lg bg-forest-600 hover:bg-forest-700"
          >
            {product.badge}
          </Badge>
        </div>
      )}

      {/* Product Image */}
      <Link href={product.href} className="block relative aspect-square overflow-hidden bg-slate-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-linear-to-t from-forest-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Quick View Button on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            variant="outline"
            size="sm"
            className="bg-white/95 hover:bg-white text-slate-900 shadow-xl rounded-xl"
            asChild
          >
            <Link href={product.href}>
              <Eye className="h-4 w-4 mr-2" />
              Quick View
            </Link>
          </Button>
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-5">
        {/* Product Name */}
        <Link href={product.href}>
          <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-forest-700 transition-colors uppercase">
            {product.name}
          </h3>
        </Link>

        {/* Features */}
        <div className="mb-4 space-y-2">
          {product.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-slate-600">
              <div className="w-4 h-4 rounded-full bg-forest-100 flex items-center justify-center shrink-0">
                <Check className="h-3 w-3 text-forest-600" />
              </div>
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Yarn Type Badge */}
        <div className="mb-4">
          <Badge
            variant="outline"
            className="bg-forest-50 border-forest-200 text-forest-700"
          >
            {product.yarnType} YARN
          </Badge>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <Button
            variant="outline"
            size="sm"
            className="border-slate-200 hover:border-forest-200 hover:bg-forest-50 hover:text-forest-700 rounded-xl"
            asChild
          >
            <Link href={product.href}>View Info</Link>
          </Button>
          <Button
            size="sm"
            className="bg-forest-600 hover:bg-forest-700 text-white rounded-xl"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
