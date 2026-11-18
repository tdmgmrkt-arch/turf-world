"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight, Truck, Clock, Globe, Check } from "lucide-react";

const benefits = [
  {
    icon: Truck,
    title: "Nationwide Network",
    description: "Access distribution resources across the country",
  },
  {
    icon: Clock,
    title: "48-Hour Shipping",
    description: "Fast delivery anywhere in the US",
  },
  {
    icon: MapPin,
    title: "Multiple Facilities",
    description: "Find a location near you",
  },
];

export function Logistics() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50" />
      </div>

      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-forest-100 border border-forest-200 rounded-full px-5 py-2 mb-6">
            <Globe className="h-4 w-4 text-forest-700" />
            <span className="text-sm font-semibold text-forest-800">Nationwide Coverage</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            When It Comes to Logistics,
            <br />
            <span className="text-forest-600">We Have You Covered</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-forest-500 rounded-full mb-8" />

          {/* Shipping Badge */}
          <div className="inline-flex items-center gap-4 bg-slate-900 text-white rounded-2xl px-8 py-5 shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-forest-600 flex items-center justify-center">
              <Truck className="h-6 w-6" />
            </div>
            <div className="text-left">
              <div className="text-sm font-medium text-slate-400 uppercase tracking-wider">Nationwide</div>
              <div className="text-2xl font-black">48-Hour Shipping</div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 text-center border border-slate-200 shadow-sm hover:shadow-lg hover:border-forest-200 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-forest-100 text-forest-700 mb-4 group-hover:bg-forest-600 group-hover:text-white transition-colors duration-300">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-600">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-slate-600 leading-relaxed">
            Our nationwide network lets you tap into huge distribution resources when the market is hungry and scale back when demand dips. Use the map below to find a facility close to you.
          </p>
        </div>

        {/* Map Image */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="relative group">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white">
              <div
                className="aspect-video w-full bg-slate-100 transition-transform duration-700 group-hover:scale-[1.02]"
                style={{
                  backgroundImage: "url('/Untitled design (24).png')",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />

              {/* Map Overlay on Hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/40">
                <div className="bg-white rounded-2xl px-8 py-5 shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-forest-600 text-white">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-slate-900">Find Your Location</div>
                      <div className="text-sm text-slate-600">Multiple facilities nationwide</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Badges */}
              <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-2">
                <div className="bg-white/95 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-forest-600" />
                    <span className="text-sm font-semibold text-slate-800">Coast to Coast</span>
                  </div>
                </div>
                <div className="bg-white/95 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-forest-600" />
                    <span className="text-sm font-semibold text-slate-800">Fast Delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-lg text-slate-600 mb-6">
            Ready to get started with your turf project?
          </p>
          <Button
            asChild
            size="lg"
            className="bg-forest-600 hover:bg-forest-700 text-white font-semibold rounded-xl px-8 h-12 shadow-lg shadow-forest-600/25 hover:shadow-xl"
          >
            <Link href="/request-samples">
              Get a Free Quote
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
