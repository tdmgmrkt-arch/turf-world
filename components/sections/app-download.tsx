"use client";

import Link from "next/link";
import Image from "next/image";
import { Smartphone } from "lucide-react";

export function AppDownload() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-slate-900 rounded-3xl p-12 md:p-16 overflow-hidden shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-64 h-64 border-2 border-white rounded-full" />
              <div className="absolute bottom-10 left-10 w-48 h-48 border-2 border-white rounded-full" />
              <div className="absolute top-1/2 left-1/4 w-32 h-32 border-2 border-white rounded-full" />
            </div>

            {/* Accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-forest-500" />

            {/* Content */}
            <div className="relative z-10 text-center text-white">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-forest-600 mb-8 shadow-lg shadow-forest-600/30">
                <Smartphone className="h-8 w-8" />
              </div>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Already Know What You Want?
              </h2>

              {/* Subheading */}
              <p className="text-xl md:text-2xl mb-10 text-slate-400 max-w-2xl mx-auto">
                Enjoy a seamless shopping experience anytime, anywhere
              </p>

              {/* Logo */}
              <div className="mb-12">
                <div className="w-24 h-24 mx-auto rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-4 shadow-xl">
                  <Image
                    src="/twlogo2.png"
                    alt="Turf World"
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* App Store Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {/* App Store Button */}
                <Link
                  href="#"
                  className="group flex items-center gap-3 bg-white hover:bg-slate-100 text-slate-900 rounded-xl px-6 py-4 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-slate-500">Download on the</div>
                    <div className="text-lg font-bold">App Store</div>
                  </div>
                </Link>

                {/* Google Play Button */}
                <Link
                  href="#"
                  className="group flex items-center gap-3 bg-white hover:bg-slate-100 text-slate-900 rounded-xl px-6 py-4 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-slate-500">Get it on</div>
                    <div className="text-lg font-bold">Google Play</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
