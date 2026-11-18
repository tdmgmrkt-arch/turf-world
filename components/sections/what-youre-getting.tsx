"use client";

import { Shield, Sparkles, Award, Check } from "lucide-react";

export function WhatYoureGetting() {
  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-forest-100 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-forest-50 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-forest-100 border border-forest-200 rounded-full px-5 py-2 mb-6">
            <Award className="h-4 w-4 text-forest-700" />
            <span className="text-sm font-semibold text-forest-800">Premium Quality Guarantee</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What You&apos;re Getting
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Industry-leading warranties and unmatched quality standards
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Warranty Card */}
          <div className="group bg-white rounded-3xl p-10 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:border-forest-100 transition-all duration-300">
            {/* Header with Icon */}
            <div className="flex items-start gap-4 mb-8">
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-forest-600 text-white shadow-lg shadow-forest-600/30">
                <Shield className="h-7 w-7" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">
                  Industry Leading
                </p>
                <h3 className="text-2xl font-bold text-slate-900">Warranty</h3>
              </div>
            </div>

            {/* Big Number */}
            <div className="mb-8">
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-7xl md:text-8xl font-black text-forest-600 leading-none">
                  16
                </span>
                <span className="text-3xl font-bold text-slate-400">Years</span>
              </div>
              <div className="h-1 w-24 bg-forest-500 rounded-full" />
            </div>

            {/* Description */}
            <p className="text-slate-600 leading-relaxed mb-8">
              Since 2017, the synthetic turf industry has seen many changes. The warranty tells all - anything less than 15 years means shortcuts in production, including lower quality yarn and backing.
            </p>

            {/* Key Points */}
            <div className="space-y-3">
              {[
                "Longest comprehensive warranty in the industry",
                "Premium quality yarn and backing materials",
                "Maximum durability and longevity",
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-forest-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-forest-600" />
                  </div>
                  <span className="text-sm text-slate-700">{point}</span>
                </div>
              ))}
            </div>

            {/* Badge */}
            <div className="mt-8 pt-6 border-t border-slate-100">
              <div className="inline-flex items-center gap-2 text-sm bg-forest-50 text-forest-700 px-4 py-2 rounded-full">
                <Award className="h-4 w-4" />
                <span className="font-semibold">16-Year Warranty Certified</span>
              </div>
            </div>
          </div>

          {/* Quality Card */}
          <div className="group bg-white rounded-3xl p-10 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:border-forest-100 transition-all duration-300">
            {/* Header with Icon */}
            <div className="flex items-start gap-4 mb-8">
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-slate-900 text-white shadow-lg shadow-slate-900/30">
                <Sparkles className="h-7 w-7" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">
                  Premium Grade
                </p>
                <h3 className="text-2xl font-bold text-slate-900">Quality</h3>
              </div>
            </div>

            {/* Quality Badge */}
            <div className="mb-8">
              <div className="inline-flex flex-col items-start bg-slate-900 text-white rounded-2xl px-8 py-6 shadow-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-5 w-5 text-forest-400" />
                  <span className="text-sm font-semibold uppercase tracking-wider text-slate-300">Commercial Grade</span>
                </div>
                <span className="text-4xl font-black">C8 Yarn</span>
                <span className="text-sm text-slate-400 mt-1">Premium Resin Technology</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-600 leading-relaxed mb-8">
              Turf World sets the industry standard for synthetic grass quality. We construct our products with commercial grade C8 yarn, ensuring superior durability with a softer, more natural feel.
            </p>

            {/* Key Benefits */}
            <div className="space-y-3">
              {[
                "Commercial grade C8 yarn construction",
                "Softer feel with natural appearance",
                "Long-lasting vibrant colors",
                "Maximum durability and resilience",
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-forest-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-forest-600" />
                  </div>
                  <span className="text-sm text-slate-700">{point}</span>
                </div>
              ))}
            </div>

            {/* Badge */}
            <div className="mt-8 pt-6 border-t border-slate-100">
              <div className="inline-flex items-center gap-2 text-sm bg-slate-100 text-slate-700 px-4 py-2 rounded-full">
                <Sparkles className="h-4 w-4" />
                <span className="font-semibold">C8 Yarn Certified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-forest-600 mb-1">
                16 Years
              </div>
              <div className="text-sm text-slate-500 font-medium">Warranty Coverage</div>
            </div>
            <div className="hidden md:block h-12 w-px bg-slate-200" />
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-forest-600 mb-1">
                C8 Grade
              </div>
              <div className="text-sm text-slate-500 font-medium">Premium Yarn</div>
            </div>
            <div className="hidden md:block h-12 w-px bg-slate-200" />
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-forest-600 mb-1">
                #1 Quality
              </div>
              <div className="text-sm text-slate-500 font-medium">Industry Leader</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
