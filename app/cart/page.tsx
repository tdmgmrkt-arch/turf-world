"use client";

import { useCart } from "@/contexts/cart-context";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(itemId);
    } else {
      updateQuantity(itemId, newQuantity);
    }
  };

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <div className="w-32 h-32 rounded-full bg-slate-100 flex items-center justify-center mb-8">
              <ShoppingBag className="h-16 w-16 text-slate-400" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-lg text-slate-500 mb-8 max-w-md">
              Looks like you haven&apos;t added any products to your cart yet.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-forest-600 hover:bg-forest-700 text-white rounded-xl shadow-lg shadow-forest-600/25"
            >
              <Link href="/products">
                Browse Products
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Shopping Cart
          </h1>
          <div className="h-1 w-24 bg-forest-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.items.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex gap-6">
                  {/* Product Image */}
                  <div className="relative w-32 h-32 shrink-0 rounded-xl overflow-hidden bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {item.name}
                      </h3>
                      <div className="text-sm text-slate-500 space-y-1 mb-2">
                        <p className="font-semibold text-forest-600">
                          {item.squareFeet} sqft per roll × ${item.pricePerSqFt.toFixed(2)}/sqft
                        </p>
                        {item.specifications && (
                          <>
                            {item.specifications.faceWeight && (
                              <p>Face Weight: {item.specifications.faceWeight}</p>
                            )}
                            {item.specifications.pileHeight && (
                              <p>Pile Height: {item.specifications.pileHeight}</p>
                            )}
                            {item.specifications.color && (
                              <p>Color: {item.specifications.color}</p>
                            )}
                          </>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-9 w-9 rounded-full border-slate-200"
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity - 1)
                          }
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="text-lg font-semibold w-12 text-center">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-9 w-9 rounded-full border-slate-200"
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity + 1)
                          }
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <p className="text-2xl font-bold text-slate-900">
                          ${(item.pricePerSqFt * item.squareFeet * item.quantity).toFixed(2)}
                        </p>
                        <p className="text-sm text-slate-500">
                          ${(item.pricePerSqFt * item.squareFeet).toFixed(2)} per roll
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-red-500 hover:text-red-600 hover:bg-red-50 rounded-full"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm sticky top-24">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-slate-500">
                  <span>Subtotal ({cart.totalItems} items)</span>
                  <span>${cart.totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Shipping</span>
                  <span className="text-forest-600 font-semibold">FREE</span>
                </div>
                <div className="border-t border-slate-200 pt-4">
                  <div className="flex justify-between text-xl font-bold text-slate-900">
                    <span>Total</span>
                    <span className="text-forest-600">${cart.totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <Button
                asChild
                size="lg"
                className="w-full bg-forest-600 hover:bg-forest-700 text-white rounded-xl shadow-lg shadow-forest-600/25 mb-4"
              >
                <Link href="/checkout">
                  Proceed to Checkout
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full border-slate-200 hover:bg-forest-50 hover:border-forest-200 hover:text-forest-700 rounded-xl"
              >
                <Link href="/products">Continue Shopping</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
