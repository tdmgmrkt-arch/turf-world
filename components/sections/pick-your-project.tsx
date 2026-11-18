"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PawPrint, Home, Building2, Target, ArrowRight, Compass } from "lucide-react";

const projectCategories = [
  {
    id: "pets",
    title: "Pet Turf",
    description: "Pet-friendly solutions",
    icon: PawPrint,
    href: "/products?category=pet",
    image: "/projects/petturfproj.webp",
  },
  {
    id: "residential",
    title: "Residential",
    description: "Beautiful home lawns",
    icon: Home,
    href: "/products?category=residential",
    image: "/projects/reidentialturfproj.webp",
  },
  {
    id: "commercial",
    title: "Commercial",
    description: "High-traffic durability",
    icon: Building2,
    href: "/products?category=commercial",
    image: "/projects/commercialturfproj.webp",
  },
  {
    id: "golf",
    title: "Putting Greens",
    description: "Professional grade",
    icon: Target,
    href: "/products?category=putting",
    image: "/projects/proputproject.avif",
  },
];

export function PickYourProject() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-forest-100 border border-forest-200 rounded-full px-5 py-2 mb-6">
            <Compass className="h-4 w-4 text-forest-700" />
            <span className="text-sm font-semibold text-forest-800">Shop by Category</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Pick Your Project
          </h2>
          <div className="h-1 w-24 mx-auto bg-forest-500 rounded-full" />
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.id}
                href={category.href}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <div
                    className="w-full h-full transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${category.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/60 to-slate-900/30 group-hover:from-forest-900 group-hover:via-forest-900/60 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 flex flex-col items-center text-center min-h-[300px] justify-between">
                  {/* Icon */}
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm text-white shadow-lg group-hover:bg-forest-600 group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-8 w-8" />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {category.title}
                    </h3>
                    <p className="text-white/80 text-sm mb-6">
                      {category.description}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <Button
                    size="sm"
                    className="bg-white text-slate-900 hover:bg-forest-50 font-semibold rounded-xl shadow-lg"
                  >
                    Shop Now
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
