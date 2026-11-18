"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryImages = [
  "/gallery/image (1).jpeg",
  "/gallery/image (2).jpeg",
  "/gallery/image (3).jpeg",
  "/gallery/image (4).jpeg",
  "/gallery/image (5).jpeg",
  "/gallery/image (6).jpeg",
  "/gallery/image (7).jpeg",
  "/gallery/image (8).jpeg",
];

export function ProductsInAction() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerView = 4;

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + imagesPerView >= galleryImages.length ? 0 : prev + imagesPerView
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - imagesPerView < 0
        ? Math.max(0, galleryImages.length - imagesPerView)
        : prev - imagesPerView
    );
  };

  const visibleImages = galleryImages.slice(
    currentIndex,
    currentIndex + imagesPerView
  );

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-forest-100 border border-forest-200 rounded-full px-5 py-2 mb-6">
            <Camera className="h-4 w-4 text-forest-700" />
            <span className="text-sm font-semibold text-forest-800">Project Gallery</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Products in Action
          </h2>
          <div className="h-1 w-24 mx-auto bg-forest-500 rounded-full" />
        </div>

        {/* Gallery Carousel */}
        <div className="relative max-w-7xl mx-auto">
          {/* Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {visibleImages.map((image, index) => (
              <div
                key={currentIndex + index}
                className="group relative aspect-square rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={image}
                  alt={`Gallery image ${currentIndex + index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-forest-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Camera className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border-2 border-slate-200 hover:bg-forest-600 hover:text-white hover:border-forest-600 transition-all"
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Page Indicators */}
            <div className="flex gap-2">
              {Array.from({
                length: Math.ceil(galleryImages.length / imagesPerView),
              }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * imagesPerView)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / imagesPerView) === index
                      ? "w-8 bg-forest-600"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border-2 border-slate-200 hover:bg-forest-600 hover:text-white hover:border-forest-600 transition-all"
              disabled={currentIndex + imagesPerView >= galleryImages.length}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
