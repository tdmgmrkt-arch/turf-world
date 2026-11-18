"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Package, ArrowRight, Check } from "lucide-react";

const benefits = [
  "High-quality artificial turf samples",
  "Feel the texture and quality firsthand",
  "Compare multiple products side-by-side",
  "Free shipping on sample packs",
];

export function RequestSamples() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1">
            <div className="max-w-xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-forest-100 border border-forest-200 rounded-full px-5 py-2 mb-6">
                <Package className="h-4 w-4 text-forest-700" />
                <span className="text-sm font-semibold text-forest-800">Free Samples</span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Request Turf
                <br />
                <span className="text-forest-600">Samples</span>
              </h2>

              {/* Accent Line */}
              <div className="h-1 w-24 bg-forest-500 rounded-full mb-6" />

              {/* Description */}
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Click below to request our high-quality Artificial Turf Sample Pack
              </p>

              {/* Benefits List */}
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-forest-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-forest-600" />
                    </div>
                    <span className="text-slate-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                asChild
                size="lg"
                className="bg-forest-600 hover:bg-forest-700 text-white font-semibold rounded-xl px-8 h-12 shadow-lg shadow-forest-600/25 hover:shadow-xl"
              >
                <Link href="/request-samples">
                  Request Samples
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="order-1 lg:order-2">
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-slate-200">
                <div
                  className="aspect-[4/3] w-full bg-slate-100 transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: "url(/reqsamples.webp)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-forest-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white border border-slate-200 rounded-2xl shadow-xl p-6 transform group-hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-3xl font-bold text-forest-600">
                    FREE
                  </div>
                  <div className="text-sm text-slate-600 font-medium">
                    Shipping
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
