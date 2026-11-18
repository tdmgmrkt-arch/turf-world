"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Flame } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Olive 73",
    badge: "Overstock Sale",
    badgeColor: "bg-red-500",
    image: "/products/olive 73.png",
    href: "/products/olive-73",
    rating: 5,
  },
  {
    id: 2,
    name: "Bermuda 87",
    badge: "Best Seller",
    badgeColor: "bg-forest-600",
    image: "/products/bermuda 87.png",
    href: "/products/bermuda-87",
    rating: 5,
  },
  {
    id: 3,
    name: "Winter Breeze 108",
    badge: "Best Seller",
    badgeColor: "bg-forest-600",
    image: "/products/winter breeze 108.png",
    href: "/products/winter-breeze-108",
    rating: 5,
  },
  {
    id: 4,
    name: "Olive 59",
    badge: "Best Seller",
    badgeColor: "bg-forest-600",
    image: "/products/olive 59.png",
    href: "/products/olive-59",
    rating: 5,
  },
];

export function HottestProducts() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-forest-100 border border-forest-200 rounded-full px-5 py-2 mb-6">
              <Flame className="h-4 w-4 text-forest-700" />
              <span className="text-sm font-semibold text-forest-800">Popular Products</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Hottest Products
            </h2>
            <div className="h-1 w-24 bg-forest-500 rounded-full" />
          </div>
          <Button
            variant="outline"
            size="lg"
            className="mt-6 md:mt-0 border-2 border-slate-200 hover:border-forest-500 hover:text-forest-700 rounded-xl"
            asChild
          >
            <Link href="/products">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-forest-200 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className={`${product.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}>
                  {product.badge}
                </span>
              </div>

              {/* Product Image */}
              <Link href={product.href} className="block relative aspect-square overflow-hidden bg-slate-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
              </Link>

              {/* Product Info */}
              <div className="p-5">
                {/* Product Name */}
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-forest-700 transition-colors">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: product.rating }).map((_, index) => (
                    <Star
                      key={index}
                      className="h-4 w-4 fill-forest-500 text-forest-500"
                    />
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  variant="outline"
                  className="w-full border-slate-200 hover:bg-forest-600 hover:text-white hover:border-forest-600 rounded-xl transition-all"
                  asChild
                >
                  <Link href={product.href}>
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
