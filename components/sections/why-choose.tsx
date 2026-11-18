"use client";

import { Award, Shield, Check, Leaf, Trophy } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Hand-Selected Manufacturers",
    description: "Swift order fulfillment while delivering exceptional quality every time",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Zero lead, zero heavy metals, no harmful chemicals",
  },
  {
    icon: Trophy,
    title: "Industry Excellence",
    description: "Setting the standard for synthetic turf quality and service",
  },
];

const certifications = [
  { name: "DIN", description: "German Institute for Standardization" },
  { name: "REACH", description: "European Chemical Safety" },
  { name: "RoHS", description: "Restriction of Hazardous Substances" },
];

export function WhyChoose() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-forest-100 border border-forest-200 rounded-full px-5 py-2 mb-6">
              <Award className="h-4 w-4 text-forest-700" />
              <span className="text-sm font-semibold text-forest-800">Why Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Why Choose
              <br />
              <span className="text-forest-600">Turf World?</span>
            </h2>
            <div className="h-1 w-24 mx-auto bg-forest-500 rounded-full" />
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-forest-200 transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 w-14 h-14 rounded-xl bg-forest-100 flex items-center justify-center text-forest-700 group-hover:bg-forest-600 group-hover:text-white transition-colors duration-300">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Main Value Proposition */}
          <div className="relative mb-12">
            <div className="bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl">
              {/* Accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-forest-500 rounded-t-3xl" />

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-forest-600 flex items-center justify-center">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Excellence in Every Detail
                  </h3>
                  <p className="text-lg text-slate-300 leading-relaxed mb-6">
                    Here at Turf World, we pride ourselves on excellence. All our manufacturers are hand-selected, ensuring swift order fulfillment while delivering exceptional quality every time.
                  </p>

                  {/* Safety Highlights */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start gap-3 bg-white/10 rounded-xl p-4">
                      <div className="w-6 h-6 rounded-full bg-forest-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-white mb-1">Zero Lead</div>
                        <div className="text-sm text-slate-400">Completely lead-free materials</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-white/10 rounded-xl p-4">
                      <div className="w-6 h-6 rounded-full bg-forest-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-white mb-1">Zero Heavy Metals</div>
                        <div className="text-sm text-slate-400">No harmful chemicals</div>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-400">
                    All Turf World products meet or exceed the latest safety standards and regulations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Certified to the Highest Standards
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="group bg-white border border-slate-200 rounded-2xl px-6 py-4 shadow-sm hover:shadow-lg hover:border-forest-200 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-forest-100 group-hover:bg-forest-600 transition-colors duration-300">
                      <Shield className="h-5 w-5 text-forest-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="text-left">
                      <div className="font-black text-lg text-slate-900">{cert.name}</div>
                      <div className="text-xs text-slate-500">{cert.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
