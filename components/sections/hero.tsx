"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Shield, Leaf, BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const backgroundImages = [
  "/hero1.webp",
  "/hero2.webp",
  "/hero3.webp",
  "/hero4.webp",
];

const features = [
  {
    icon: Award,
    title: "Premium C8 Yarn",
    description: "Industry-leading durability and natural appearance",
  },
  {
    icon: Shield,
    title: "16-Year Warranty",
    description: "Comprehensive coverage you can trust",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Lead-free, recyclable, and water-saving",
  },
  {
    icon: BadgeCheck,
    title: "Wholesale Pricing",
    description: "Direct-to-you savings on every order",
  },
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Images with Ken Burns effect */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={image}
            className={cn(
              "absolute inset-0 w-full h-full transition-opacity duration-1500 ease-out",
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            )}
          >
            <div
              className={cn(
                "absolute inset-0 w-full h-full transition-transform duration-8000 ease-out",
                index === currentImageIndex ? "scale-110" : "scale-100"
              )}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        ))}
        {/* Premium gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-slate-950/80 via-slate-900/70 to-forest-950/60" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 pt-32 pb-24">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div
            className={cn(
              "mb-6 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium rounded-full">
              <span className="w-2 h-2 bg-forest-400 rounded-full animate-pulse" />
              Southern California&apos;s Trusted Turf Partner
            </span>
          </div>

          {/* Main Heading */}
          <div
            className={cn(
              "mb-8 transition-all duration-700 delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              Premium Artificial
              <br />
              <span className="text-forest-400">Turf Solutions</span>
            </h1>
          </div>

          {/* Subheading */}
          <p
            className={cn(
              "text-xl md:text-2xl text-slate-300 max-w-2xl mb-10 leading-relaxed transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            Transform your landscape with wholesale-priced, commercial-grade turf.
            Exceptional quality, unmatched service.
          </p>

          {/* CTA Buttons */}
          <div
            className={cn(
              "flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-700 delay-300",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            <Button
              size="xl"
              className="bg-forest-600 hover:bg-forest-700 text-white font-semibold px-8 shadow-xl shadow-forest-900/30 hover:shadow-2xl hover:shadow-forest-900/40 transition-all hover:-translate-y-0.5"
              asChild
            >
              <Link href="/products">
                Browse Products
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <Button
              size="xl"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-8 border border-white/20 transition-all hover:-translate-y-0.5"
              asChild
            >
              <Link href="/request-samples">
                Request Free Samples
              </Link>
            </Button>
          </div>

          {/* Feature Pills */}
          <div
            className={cn(
              "grid grid-cols-2 lg:grid-cols-4 gap-3 transition-all duration-700 delay-400",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group flex items-start gap-3 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-forest-600/20 flex items-center justify-center text-forest-400 group-hover:bg-forest-600/30 transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-0.5">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Image Indicators - Bottom right */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={cn(
              "h-1 rounded-full transition-all duration-300",
              index === currentImageIndex
                ? "w-8 bg-forest-500"
                : "w-4 bg-white/30 hover:bg-white/50"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <div className="w-px h-8 bg-linear-to-b from-white/50 to-transparent" />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white via-white/80 to-transparent z-10" />
    </section>
  );
}
