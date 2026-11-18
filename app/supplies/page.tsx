"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ShoppingCart,
  Eye,
  Plus,
  Minus,
  Package,
  Truck,
  Check,
  ArrowRight,
} from "lucide-react";
import { useCart } from "@/contexts/cart-context";
import { cn } from "@/lib/utils";
import { supplies, type Supply } from "@/lib/supplies-data";
import { SupplyQuickView } from "@/components/supplies/supply-quick-view";

interface SupplyCardProps {
  product: Supply;
  onQuickView: () => void;
}

function SupplyCard({ product, onQuickView }: SupplyCardProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(
      {
        id: product.id,
        name: product.name,
        image: product.image,
        pricePerSqFt: product.price,
        squareFeet: 1,
        variant: product.unit,
      },
      quantity
    );
    setQuantity(1);
  };

  return (
    <div className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-forest-200 transition-all duration-300 hover:-translate-y-1">
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-4 left-4 z-10">
          <Badge
            variant={product.badge === "Sale" ? "destructive" : "default"}
            className={cn(
              "text-xs font-bold shadow-lg",
              product.badge !== "Sale" && "bg-forest-600 hover:bg-forest-700"
            )}
          >
            {product.badge}
          </Badge>
        </div>
      )}

      {/* Product Image */}
      <Link href={`/supplies/${product.id}`}>
        <div className="relative aspect-square overflow-hidden bg-slate-100 cursor-pointer">
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
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onQuickView();
              }}
            >
              <Eye className="h-4 w-4 mr-2" />
              Quick View
            </Button>
          </div>
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-5">
        {/* Product Name */}
        <Link href={`/supplies/${product.id}`}>
          <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-forest-700 transition-colors uppercase line-clamp-2 cursor-pointer">
            {product.name}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-sm text-slate-500 mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Price */}
        <div className="mb-4">
          {product.isFree ? (
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-forest-600">FREE</span>
              <span className="text-sm text-slate-500">
                {product.unit}
              </span>
            </div>
          ) : (
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-slate-900">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-slate-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
              <span className="text-sm text-slate-500">
                {product.unit}
              </span>
            </div>
          )}
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-sm text-slate-500">Qty:</span>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full border-slate-200"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="text-lg font-semibold w-8 text-center">
              {quantity}
            </span>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full border-slate-200"
              onClick={() => setQuantity(quantity + 1)}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <Button
          className="w-full bg-forest-600 hover:bg-forest-700 text-white rounded-xl"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default function SuppliesPage() {
  const [quickViewSupply, setQuickViewSupply] = useState<Supply | null>(null);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-slate-900" />

        {/* Accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-forest-500" />

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-forest-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-forest-500/10 rounded-full blur-3xl" />

        <div className="container relative mx-auto px-4">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-6">
              <Package className="h-4 w-4 text-forest-400" />
              <span className="text-sm font-semibold text-white">
                Professional Grade Materials
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Turf Install Materials
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-6 max-w-2xl mx-auto">
              Everything you need for a professional turf installation
            </p>
            <div className="h-1 w-32 mx-auto bg-forest-500 rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 py-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-forest-100 flex items-center justify-center">
                <Truck className="h-5 w-5 text-forest-600" />
              </div>
              <span className="text-sm font-medium text-slate-700">
                Fast Shipping
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-forest-100 flex items-center justify-center">
                <Check className="h-5 w-5 text-forest-600" />
              </div>
              <span className="text-sm font-medium text-slate-700">
                Quality Guaranteed
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-forest-100 flex items-center justify-center">
                <Package className="h-5 w-5 text-forest-600" />
              </div>
              <span className="text-sm font-medium text-slate-700">
                Professional Grade
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Installation Supplies</h2>
              <div className="h-1 w-24 bg-forest-500 rounded-full" />
            </div>
            <div className="mt-4 md:mt-0 text-sm text-slate-500">
              Showing{" "}
              <span className="font-bold text-slate-900">
                {supplies.length}
              </span>{" "}
              products
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {supplies.map((product) => (
              <SupplyCard
                key={product.id}
                product={product}
                onQuickView={() => setQuickViewSupply(product)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Need Help Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-900 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              {/* Accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-forest-500" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Not Sure What You Need?
                  </h3>
                  <p className="text-slate-300 mb-6">
                    Our team of experts can help you determine the right
                    materials for your turf installation project. Get
                    personalized recommendations based on your specific needs.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-forest-600 hover:bg-forest-700 text-white rounded-xl shadow-lg shadow-forest-600/25">
                      Contact Us
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                    <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 rounded-xl" asChild>
                      <Link href="/products">Browse Turf Products</Link>
                    </Button>
                  </div>
                </div>
                <div className="hidden md:flex justify-center">
                  <div className="w-36 h-36 rounded-full bg-forest-600 flex items-center justify-center shadow-lg shadow-forest-600/25">
                    <Package className="h-16 w-16 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      {quickViewSupply && (
        <SupplyQuickView
          supply={quickViewSupply}
          open={!!quickViewSupply}
          onOpenChange={(open) => {
            if (!open) setQuickViewSupply(null);
          }}
        />
      )}
    </div>
  );
}
