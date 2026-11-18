"use client";

import { useState } from "react";
import { useCart } from "@/contexts/cart-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);

  const [formData, setFormData] = useState({
    // Contact Information
    email: "",
    phone: "",

    // Shipping Address
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",

    // Billing (same as shipping for now)
    // Payment would integrate with Stripe/PayPal later
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate order processing
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      router.push("/order-confirmation");
    }, 2000);
  };

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              No Items to Checkout
            </h1>
            <p className="text-lg text-slate-500 mb-8">
              Your cart is empty. Add some products first!
            </p>
            <Button
              asChild
              size="lg"
              className="bg-forest-600 hover:bg-forest-700 text-white rounded-xl shadow-lg shadow-forest-600/25"
            >
              <Link href="/products">Browse Products</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-12">
        {/* Back to Cart */}
        <Button
          asChild
          variant="ghost"
          className="mb-6 hover:bg-forest-50 hover:text-forest-700"
        >
          <Link href="/cart">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Cart
          </Link>
        </Button>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Checkout
          </h1>
          <div className="h-1 w-24 bg-forest-500 rounded-full" />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Information */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <Label htmlFor="email" className="text-slate-700">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="border-slate-200 rounded-xl focus:border-forest-500 focus:ring-forest-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="phone" className="text-slate-700">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(123) 456-7890"
                      className="border-slate-200 rounded-xl focus:border-forest-500 focus:ring-forest-500"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Shipping Address
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-slate-700">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="border-slate-200 rounded-xl focus:border-forest-500 focus:ring-forest-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-slate-700">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="border-slate-200 rounded-xl focus:border-forest-500 focus:ring-forest-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="address" className="text-slate-700">Address *</Label>
                    <Input
                      id="address"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Street address"
                      className="border-slate-200 rounded-xl focus:border-forest-500 focus:ring-forest-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="city" className="text-slate-700">City *</Label>
                    <Input
                      id="city"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      className="border-slate-200 rounded-xl focus:border-forest-500 focus:ring-forest-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="state" className="text-slate-700">State *</Label>
                    <Input
                      id="state"
                      name="state"
                      required
                      value={formData.state}
                      onChange={handleInputChange}
                      className="border-slate-200 rounded-xl focus:border-forest-500 focus:ring-forest-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode" className="text-slate-700">ZIP Code *</Label>
                    <Input
                      id="zipCode"
                      name="zipCode"
                      required
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="border-slate-200 rounded-xl focus:border-forest-500 focus:ring-forest-500"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Section - Placeholder */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Payment Information
                </h2>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
                  <p className="text-slate-500">
                    Payment integration (Stripe/PayPal) will be added here.
                    <br />
                    For now, this is a demo checkout.
                  </p>
                </div>
              </div>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm sticky top-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Order Summary
                </h2>

                {/* Items List */}
                <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                  {cart.items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="relative w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden bg-slate-100">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm text-slate-900">{item.name}</p>
                        <p className="text-xs text-slate-500">
                          {item.squareFeet} sqft × {item.quantity} roll{item.quantity !== 1 ? "s" : ""}
                        </p>
                        <p className="text-xs text-forest-600">
                          ${item.pricePerSqFt.toFixed(2)}/sqft
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-slate-900">
                          ${(item.pricePerSqFt * item.squareFeet * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="space-y-3 border-t border-slate-200 pt-4 mb-6">
                  <div className="flex justify-between text-slate-500">
                    <span>Subtotal</span>
                    <span>${cart.totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Shipping</span>
                    <span className="text-forest-600 font-semibold">FREE</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Tax</span>
                    <span>${(cart.totalPrice * 0.08).toFixed(2)}</span>
                  </div>
                  <div className="border-t border-slate-200 pt-3">
                    <div className="flex justify-between text-xl font-bold text-slate-900">
                      <span>Total</span>
                      <span className="text-forest-600">${(cart.totalPrice * 1.08).toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={isProcessing}
                  className="w-full bg-forest-600 hover:bg-forest-700 text-white rounded-xl shadow-lg shadow-forest-600/25 font-bold"
                >
                  {isProcessing ? (
                    "Processing..."
                  ) : (
                    <>
                      Place Order
                      <Check className="h-5 w-5 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
