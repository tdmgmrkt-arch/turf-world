"use client";

import { Clock, Truck, Smartphone, Zap, Check } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "SAME DAY",
    subtitle: "WILL CALL",
    description:
      "Your order will be ready for pick up within 2 hours of order placement. You will be loaded within 15 minutes",
    highlights: ["2 Hour Turnaround", "15 Min Loading"],
  },
  {
    icon: Truck,
    title: "NEXT DAY",
    subtitle: "DELIVERY",
    description: "We will deliver your order directly to you next day",
    highlights: ["Direct Delivery", "Fast Shipping"],
  },
  {
    icon: Smartphone,
    title: "ON-THE-GO",
    subtitle: "ORDERING",
    description:
      "Place your order by calling us, online or directly from your phone",
    highlights: ["Phone App", "Call or Click"],
  },
];

export function BuyingExperience() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-forest-100 border border-forest-200 rounded-full px-5 py-2 mb-6">
            <Zap className="h-4 w-4 text-forest-700" />
            <span className="text-sm font-semibold text-forest-800">Lightning Fast Service</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Faster, Easier
            <br />
            <span className="text-forest-600">Buying Experience</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-forest-500 rounded-full mb-6" />
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Get your turf when you need it, how you need it
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-forest-200 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-forest-600 text-white shadow-lg shadow-forest-600/25 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8" />
                  </div>
                </div>

                {/* Title */}
                <div className="mb-4">
                  <h3 className="text-2xl font-black text-slate-900 leading-tight">
                    {feature.title}
                  </h3>
                  <div className="text-xl font-bold text-forest-600">
                    {feature.subtitle}
                  </div>
                  <div className="h-1 w-12 bg-forest-500 rounded-full mt-3" />
                </div>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2">
                  {feature.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-forest-100 flex items-center justify-center">
                        <Check className="h-3 w-3 text-forest-600" />
                      </div>
                      <span className="text-sm font-medium text-slate-700">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Number badge */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center">
                  <span className="text-lg font-bold text-slate-400">
                    {index + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-forest-600 mb-2">
                2 Hours
              </div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Pickup Ready Time</div>
            </div>
            <div className="hidden md:block h-16 w-px bg-slate-200" />
            <div className="text-center">
              <div className="text-4xl font-bold text-forest-600 mb-2">
                24 Hours
              </div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Next Day Delivery</div>
            </div>
            <div className="hidden md:block h-16 w-px bg-slate-200" />
            <div className="text-center">
              <div className="text-4xl font-bold text-forest-600 mb-2">
                3 Ways
              </div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">To Order</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
