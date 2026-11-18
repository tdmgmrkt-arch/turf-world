"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ShoppingCart,
  ArrowLeft,
  Plus,
  Minus,
  Check,
  Package,
  Truck,
  Shield,
  ArrowRight,
} from "lucide-react";
import type { Supply } from "@/lib/supplies-data";
import { useCart } from "@/contexts/cart-context";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface SupplyDetailClientProps {
  supply: Supply;
}

export function SupplyDetailClient({ supply }: SupplyDetailClientProps) {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();
  const router = useRouter();

  const totalPrice = supply.price * quantity;

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(
      {
        id: supply.id,
        name: supply.name,
        image: supply.image,
        pricePerSqFt: supply.price,
        squareFeet: 1,
        variant: supply.unit,
      },
      quantity
    );
    setTimeout(() => {
      setIsAdding(false);
      router.push("/cart");
    }, 500);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Button variant="ghost" asChild className="hover:bg-forest-50 hover:text-forest-700">
          <Link href="/supplies" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Supplies
          </Link>
        </Button>
      </div>

      <div className="container mx-auto px-4 pb-20">
        {/* Product Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Left Column - Image */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xl">
              {/* Badge */}
              {supply.badge && (
                <div className="absolute top-4 left-4 z-10">
                  <Badge
                    variant={supply.badge === "Sale" ? "destructive" : "default"}
                    className={cn(
                      "text-sm font-bold shadow-lg px-4 py-1",
                      supply.badge !== "Sale" && "bg-forest-600 hover:bg-forest-700"
                    )}
                  >
                    {supply.badge}
                  </Badge>
                </div>
              )}

              <Image
                src={supply.image}
                alt={supply.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div className="space-y-6">
            {/* Product Name */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 uppercase tracking-tight">
              {supply.name}
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              {supply.fullDescription}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {supply.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm md:text-base text-slate-700"
                >
                  <div className="w-5 h-5 rounded-full bg-forest-100 flex items-center justify-center">
                    <Check className="h-3 w-3 text-forest-600" />
                  </div>
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Product Info Section */}
            <div className="space-y-4">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 uppercase">
                  Product Info
                </h2>
                <div className="h-1 w-32 bg-forest-500 rounded-full" />
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-lg">
                <div className="grid grid-cols-1 divide-y divide-slate-200">
                  {supply.productInfo.weight && (
                    <div className="p-4 hover:bg-slate-50 transition-colors">
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                        Total Weight
                      </div>
                      <div className="text-lg font-bold text-slate-900">
                        {supply.productInfo.weight}
                      </div>
                    </div>
                  )}
                  {supply.productInfo.rollSize && (
                    <div className="p-4 hover:bg-slate-50 transition-colors">
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                        Roll Size
                      </div>
                      <div className="text-lg font-bold text-slate-900">
                        {supply.productInfo.rollSize}
                      </div>
                    </div>
                  )}
                  {supply.productInfo.boxSize && (
                    <div className="p-4 hover:bg-slate-50 transition-colors">
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                        Box Size
                      </div>
                      <div className="text-lg font-bold text-slate-900">
                        {supply.productInfo.boxSize}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Pricing and Quantity Selection */}
            <div className="space-y-4 bg-white border border-slate-200 rounded-2xl p-6 shadow-lg">
              {/* Price Display */}
              <div className="text-center pb-4 border-b border-slate-200">
                <div className="text-sm text-slate-500 mb-2">
                  Price {supply.unit}
                </div>
                {supply.isFree ? (
                  <div className="text-3xl font-bold text-forest-600">FREE</div>
                ) : (
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-3xl font-bold text-forest-600">
                      ${supply.price.toFixed(2)}
                    </span>
                    {supply.originalPrice && (
                      <span className="text-lg text-slate-400 line-through">
                        ${supply.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Quantity Selector */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Quantity</label>
                <div className="flex items-center justify-center gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 rounded-full border-slate-200"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <input
                    type="number"
                    min="1"
                    max="100"
                    value={quantity}
                    onChange={(e) => {
                      const val = parseInt(e.target.value) || 1;
                      setQuantity(Math.min(100, Math.max(1, val)));
                    }}
                    className="w-20 h-10 text-center text-lg font-semibold border border-slate-200 rounded-xl bg-white"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 rounded-full border-slate-200"
                    onClick={() => setQuantity(Math.min(100, quantity + 1))}
                    disabled={quantity >= 100}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Total Price Display */}
              {!supply.isFree && (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                  <div className="text-sm text-slate-500 mb-1">
                    Total Price
                  </div>
                  <div className="text-2xl font-bold text-slate-900">
                    ${totalPrice.toFixed(2)}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    {quantity} {quantity === 1 ? "unit" : "units"} x $
                    {supply.price.toFixed(2)}
                  </div>
                </div>
              )}
            </div>

            {/* Action Button */}
            <Button
              size="lg"
              className="w-full bg-forest-600 hover:bg-forest-700 text-white font-bold rounded-xl px-8 shadow-lg shadow-forest-600/25"
              onClick={handleAddToCart}
              disabled={isAdding}
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              {isAdding ? "Adding..." : "Add to Cart"}
            </Button>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-forest-100 flex items-center justify-center mb-2">
                  <Truck className="h-6 w-6 text-forest-600" />
                </div>
                <span className="text-xs font-medium text-slate-500">
                  Fast Shipping
                </span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-forest-100 flex items-center justify-center mb-2">
                  <Shield className="h-6 w-6 text-forest-600" />
                </div>
                <span className="text-xs font-medium text-slate-500">
                  Quality Guaranteed
                </span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-forest-100 flex items-center justify-center mb-2">
                  <Package className="h-6 w-6 text-forest-600" />
                </div>
                <span className="text-xs font-medium text-slate-500">
                  Professional Grade
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Need Help Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-forest-500" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Need Installation Help?
                </h3>
                <p className="text-slate-300 mb-6">
                  Our team of experts can help you determine the right
                  materials and quantities for your turf installation project.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-forest-600 hover:bg-forest-700 text-white rounded-xl shadow-lg shadow-forest-600/25">
                    Contact Us
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                  <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 rounded-xl" asChild>
                    <Link href="/supplies">View All Supplies</Link>
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
    </div>
  );
}
