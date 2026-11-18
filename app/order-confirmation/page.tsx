"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, Package, ArrowRight } from "lucide-react";

export default function OrderConfirmationPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-forest-500 opacity-20 blur-3xl rounded-full" />
              <div className="relative bg-forest-600 rounded-full p-6 shadow-lg shadow-forest-600/25">
                <CheckCircle className="h-20 w-20 text-white" />
              </div>
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Order Confirmed!
          </h1>
          <div className="h-1 w-24 mx-auto bg-forest-500 rounded-full mb-6" />

          <p className="text-xl text-slate-500 mb-8">
            Thank you for your order. We've received your request and will process it shortly.
          </p>

          {/* Order Details Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-8 text-left shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-forest-100 flex items-center justify-center">
                <Package className="h-5 w-5 text-forest-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">What's Next?</h2>
            </div>

            <div className="space-y-4 text-slate-500">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-forest-600 text-white flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Order Confirmation Email</p>
                  <p className="text-sm">You'll receive an email confirmation with your order details.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-forest-600 text-white flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Order Processing</p>
                  <p className="text-sm">Our team will review and prepare your order for shipment.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-forest-600 text-white flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Shipping & Delivery</p>
                  <p className="text-sm">Your order will be shipped within 48 hours with tracking information.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-forest-600 hover:bg-forest-700 text-white rounded-xl shadow-lg shadow-forest-600/25 font-bold px-8"
            >
              <Link href="/products">
                Continue Shopping
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-slate-200 hover:bg-forest-50 hover:border-forest-200 hover:text-forest-700 rounded-xl px-8"
            >
              <Link href="/">
                Back to Home
              </Link>
            </Button>
          </div>

          {/* Contact Support */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-500">
              Questions about your order?{" "}
              <Link href="/contact" className="text-forest-600 hover:underline font-semibold">
                Contact our support team
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
