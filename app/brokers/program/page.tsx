"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Handshake,
  Eye,
  Compass,
  DollarSign,
  TrendingUp,
  Calculator,
  Clock,
  Zap,
  Target,
  Shield,
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Wallet,
  Scale,
  Sparkles,
  Building,
  Heart,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Who We Are data
const coreValues = [
  {
    icon: Users,
    title: "Built by People, for People",
    description: "Programs, Products, & Processes created with the individual in mind",
  },
  {
    icon: Handshake,
    title: "Partnership Across All Levels",
    description: "Our collective success is dependent on one another",
  },
  {
    icon: Eye,
    title: "Transparency and Empowerment",
    description: "Information provided up front to empower individuals to make great business decisions",
  },
];

const controlItems = [
  { icon: Clock, label: "Your Time" },
  { icon: Zap, label: "Your Effort" },
  { icon: Target, label: "Your Results" },
];

// Why section data
const whyReasons = [
  {
    icon: TrendingUp,
    title: "Uncapped Earning Potential",
    description: "Profit margin splits on all sales with no ceiling on what you can earn",
    highlight: "Unlimited Income",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    description: "Costs of Goods and Operating Costs shared up front so exact earnings can be calculated on a Per Sale basis",
    highlight: "Know Your Numbers",
  },
  {
    icon: Shield,
    title: "Empowerment",
    description: "No need to consult a manager or lose a sale over price. You have full control",
    highlight: "Be Your Own Boss",
  },
  {
    icon: Compass,
    title: "Autonomy",
    description: "Work at your own pace. Set your own schedule and goals",
    highlight: "Work Your Way",
  },
  {
    icon: Scale,
    title: "Flexibility",
    description: "Be as big or small as makes sense for your situation. Scale when you're ready",
    highlight: "Your Choice",
  },
];

// How it works steps
const howItWorksSteps = [
  {
    step: 1,
    title: "Get Your Product Costs",
    description: "You are provided the Cost Per Sq. Ft. of all Turf World Products",
    icon: Calculator,
  },
  {
    step: 2,
    title: "Set Your Price",
    description: "The Price you Sell to the Customer – The TW Cost = The Profit Margin per Sq. Ft.",
    icon: DollarSign,
  },
  {
    step: 3,
    title: "Calculate Your Split",
    description: "Profit Margin × Revenue Split % = Broker Earnings per sq. ft.",
    icon: TrendingUp,
  },
  {
    step: 4,
    title: "Earn on Every Sale",
    description: "Broker Earnings per sq. ft. × Total Sq. Ft. of Sale = Your Total Earnings",
    icon: Wallet,
  },
];

// Animated counter component
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-white mb-2">
      {count}{suffix}
    </div>
  );
}

export default function BrokerProgramPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-slate-900" />
        <div className="absolute inset-0 bg-[url('/projects/commercialturfproj.webp')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-linear-to-b from-slate-900/50 via-transparent to-slate-900/80" />

        {/* Accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-forest-500" />

        {/* Decorative elements */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-forest-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-forest-500/20 rounded-full blur-3xl" />

        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div
              className={cn(
                "inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8 transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              <Sparkles className="h-4 w-4 text-forest-400" />
              <span className="text-sm font-semibold text-white">Industry & Employment Disruptors</span>
            </div>

            {/* Heading */}
            <h1
              className={cn(
                "text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 transition-all duration-700 delay-100",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              BROKER
              <br />
              <span className="text-forest-400">
                PROGRAM
              </span>
            </h1>

            {/* Subheading */}
            <p
              className={cn(
                "text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto transition-all duration-700 delay-200",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              Create financial freedom with the benefits of ownership—without the liabilities of inventory, overhead, & operating costs.
            </p>

            {/* CTA Buttons */}
            <div
              className={cn(
                "flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              <Button size="lg" className="bg-forest-600 hover:bg-forest-700 text-white font-bold rounded-xl px-10 shadow-lg shadow-forest-600/25">
                Apply Now
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 rounded-xl px-10"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-slate-50 to-transparent" />
      </section>

      {/* Who We Are Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-forest-100 border border-forest-200 rounded-full px-5 py-2 mb-6">
              <Building className="h-4 w-4 text-forest-700" />
              <span className="text-sm font-semibold text-forest-800">About The Program</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              WHO WE ARE
            </h2>
            <div className="h-1 w-24 mx-auto bg-forest-500 rounded-full" />
          </div>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-forest-200 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-xl bg-forest-100 flex items-center justify-center mb-6 group-hover:bg-forest-600 transition-colors duration-300">
                    <Icon className="h-7 w-7 text-forest-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Control Your Future Section */}
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 overflow-hidden relative">
            {/* Accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-forest-500" />

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-forest-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-forest-500/10 rounded-full blur-3xl" />

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left - Text Content */}
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Control Your
                  <span className="text-forest-400"> Future</span>
                </h3>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  Take charge of your professional destiny. With the Broker Program, you determine your success through your own time, effort, and results.
                </p>

                <div className="flex flex-wrap gap-4">
                  {controlItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-3"
                      >
                        <div className="w-10 h-10 rounded-full bg-forest-600 flex items-center justify-center">
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-white font-semibold">{item.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right - Financial Freedom Card */}
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 text-center shadow-xl">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-forest-600 flex items-center justify-center shadow-lg shadow-forest-600/25">
                    <DollarSign className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-4">
                    Ability to Create
                    <br />
                    <span className="text-forest-600">Financial Freedom</span>
                  </h4>
                  <p className="text-slate-500 mb-6">
                    Benefits of ownership through profit margin splits without the liabilities of inventory, overhead, & operating costs.
                  </p>
                  <div className="flex items-center justify-center gap-2 text-forest-600 font-semibold">
                    <CheckCircle className="h-5 w-5" />
                    <span>Zero Inventory Risk</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-forest-600 font-semibold mt-2">
                    <CheckCircle className="h-5 w-5" />
                    <span>No Operating Costs</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-forest-600 font-semibold mt-2">
                    <CheckCircle className="h-5 w-5" />
                    <span>Full Profit Margin Splits</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-forest-100 border border-forest-200 rounded-full px-5 py-2 mb-6">
              <Heart className="h-4 w-4 text-forest-700" />
              <span className="text-sm font-semibold text-forest-800">Benefits</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              BROKER PROGRAM:
              <span className="text-forest-600"> WHY?</span>
            </h2>
            <div className="h-1 w-24 mx-auto bg-forest-500 rounded-full mb-6" />
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Discover why our Broker Program is the path to professional independence and financial success.
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyReasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={index}
                  className="group bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-forest-200 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Highlight badge */}
                  <Badge className="mb-4 bg-forest-100 border-forest-200 text-forest-700 hover:bg-forest-100">
                    {reason.highlight}
                  </Badge>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-forest-100 flex items-center justify-center mb-6 group-hover:bg-forest-600 transition-colors duration-300">
                    <Icon className="h-7 w-7 text-forest-600 group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-forest-600 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-forest-100 border border-forest-200 rounded-full px-5 py-2 mb-6">
              <Calculator className="h-4 w-4 text-forest-700" />
              <span className="text-sm font-semibold text-forest-800">The Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              BROKER PROGRAM:
              <span className="text-forest-600"> HOW IT WORKS</span>
            </h2>
            <div className="h-1 w-24 mx-auto bg-forest-500 rounded-full mb-6" />
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Turf is purchased and sold on a price per square foot basis. Here&apos;s how your earnings are calculated.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {howItWorksSteps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="relative group">
                  {/* Connector line (not on last item) */}
                  {index < howItWorksSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-[calc(50%+3.5rem)] w-[calc(100%-7rem)] h-0.5 bg-forest-200" />
                  )}

                  <div className="relative bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-forest-200 transition-all duration-300 hover:-translate-y-1">
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-forest-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {item.step}
                    </div>

                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-forest-100 flex items-center justify-center mb-4 mx-auto group-hover:bg-forest-600 transition-colors duration-300">
                      <Icon className="h-7 w-7 text-forest-600 group-hover:text-white transition-colors duration-300" />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-slate-900 mb-2 text-center">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-500 text-center leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Formula Card */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Your Earnings Formula
                </h3>
                <p className="text-slate-500">
                  Simple, transparent, and predictable earnings on every transaction
                </p>
              </div>

              {/* Formula Steps */}
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                  <div className="bg-forest-50 rounded-xl px-6 py-4 border border-forest-200">
                    <div className="text-sm text-slate-500 mb-1">Your Selling Price</div>
                    <div className="text-xl font-bold text-slate-900">$X.XX/sqft</div>
                  </div>
                  <div className="text-2xl font-bold text-slate-400">−</div>
                  <div className="bg-slate-50 rounded-xl px-6 py-4 border border-slate-200">
                    <div className="text-sm text-slate-500 mb-1">TW Cost</div>
                    <div className="text-xl font-bold text-slate-900">$X.XX/sqft</div>
                  </div>
                  <div className="text-2xl font-bold text-slate-400">=</div>
                  <div className="bg-forest-100 rounded-xl px-6 py-4 border border-forest-200">
                    <div className="text-sm text-slate-500 mb-1">Profit Margin</div>
                    <div className="text-xl font-bold text-forest-600">$X.XX/sqft</div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ChevronRight className="h-8 w-8 text-forest-500 rotate-90" />
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                  <div className="bg-forest-100 rounded-xl px-6 py-4 border border-forest-200">
                    <div className="text-sm text-slate-500 mb-1">Profit Margin</div>
                    <div className="text-xl font-bold text-forest-600">$X.XX/sqft</div>
                  </div>
                  <div className="text-2xl font-bold text-slate-400">×</div>
                  <div className="bg-forest-50 rounded-xl px-6 py-4 border border-forest-200">
                    <div className="text-sm text-slate-500 mb-1">Your Split %</div>
                    <div className="text-xl font-bold text-slate-900">XX%</div>
                  </div>
                  <div className="text-2xl font-bold text-slate-400">=</div>
                  <div className="bg-forest-600 rounded-xl px-6 py-4 text-white shadow-lg shadow-forest-600/25">
                    <div className="text-sm text-white/80 mb-1">Your Earnings</div>
                    <div className="text-xl font-bold">$X.XX/sqft</div>
                  </div>
                </div>
              </div>

              {/* Weekly Payout Notice */}
              <div className="mt-10 pt-8 border-t border-slate-200">
                <div className="flex items-center justify-center gap-4 text-center">
                  <div className="w-14 h-14 rounded-full bg-forest-600 flex items-center justify-center shadow-lg shadow-forest-600/25">
                    <Wallet className="h-7 w-7 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-lg font-bold text-slate-900">
                      Weekly Payouts Every Friday
                    </div>
                    <div className="text-slate-500">
                      Earnings are paid out weekly on Fridays for the week prior
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-900 relative">
        {/* Accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-forest-500" />

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <AnimatedCounter target={100} suffix="%" />
              <div className="text-slate-400 font-medium">Transparency</div>
            </div>
            <div className="text-center">
              <AnimatedCounter target={0} suffix="" />
              <div className="text-slate-400 font-medium">Inventory Required</div>
            </div>
            <div className="text-center">
              <AnimatedCounter target={0} suffix="" />
              <div className="text-slate-400 font-medium">Overhead Costs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                ∞
              </div>
              <div className="text-slate-400 font-medium">Earning Potential</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-slate-900 rounded-3xl p-8 md:p-16 text-center overflow-hidden shadow-2xl">
              {/* Accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-forest-500" />

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-forest-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-forest-500/10 rounded-full blur-3xl" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-6">
                  <Sparkles className="h-4 w-4 text-forest-400" />
                  <span className="text-sm font-semibold text-white">Ready to Get Started?</span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Take Control of Your
                  <br />
                  <span className="text-forest-400">
                    Financial Future
                  </span>
                </h2>

                <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                  Join the Turf World Broker Program today and start building your path to financial freedom with the support of an industry-leading team.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-forest-600 hover:bg-forest-700 text-white font-bold rounded-xl px-10 shadow-lg shadow-forest-600/25"
                  >
                    Apply Now
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-transparent border-2 border-white/50 text-white hover:bg-white/10 rounded-xl px-10"
                    asChild
                  >
                    <Link href="/brokers/training">
                      View Training Program
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
