"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  ArrowRight,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Supplies", href: "/supplies" },
  { name: "Request Samples", href: "/request-samples" },
];

const resources = [
  { name: "Installation Guide", href: "/resources/installation" },
  { name: "Product Specs", href: "/resources/specs" },
  { name: "FAQ", href: "/faq" },
];

const brokerLinks = [
  { name: "Broker Program", href: "/brokers/program" },
  { name: "Product Training", href: "/brokers/training" },
  { name: "Become a Broker", href: "/brokers/apply" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms & Conditions", href: "/terms" },
  { name: "Shipping & Returns", href: "/shipping-returns" },
];

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-slate-950">
      {/* CTA Banner */}
      <div className="bg-forest-700">
        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Ready to Transform Your Space?
              </h3>
              <p className="text-forest-100 text-sm">
                Get free samples delivered to your door. No commitment required.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                className="bg-white text-forest-800 hover:bg-slate-100 font-semibold px-6 rounded-xl"
                asChild
              >
                <Link href="/request-samples">
                  Request Samples
                </Link>
              </Button>
              <Button
                className="bg-forest-800 hover:bg-forest-900 text-white font-semibold px-6 border border-forest-600 rounded-xl"
                asChild
              >
                <Link href="/products">
                  Browse Products
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/turfworldlogo.webp"
                alt="Turf World"
                width={160}
                height={45}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
              Southern California&apos;s trusted wholesale partner for premium artificial turf.
              Quality products, competitive pricing, exceptional service.
            </p>

            {/* Trust Indicators */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-slate-400">
                <Truck className="h-4 w-4 text-forest-500" />
                <span className="text-xs">Next-Day Delivery</span>
              </div>
              <div className="w-px h-4 bg-slate-800" />
              <div className="text-xs text-slate-400">16-Year Warranty</div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-white text-sm font-semibold mb-3">
                Stay Updated
              </h4>
              <p className="text-slate-500 text-xs mb-3">
                Get exclusive deals and industry insights.
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-slate-900 border-slate-800 text-white placeholder:text-slate-600 rounded-xl h-11 focus:border-forest-600 focus:ring-forest-600"
                />
                <Button className="bg-forest-600 hover:bg-forest-700 text-white rounded-xl h-11 px-4 shrink-0">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Quick Links */}
              <div>
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  {quickLinks.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-slate-400 text-sm hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
                  Resources
                </h3>
                <ul className="space-y-3">
                  {resources.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-slate-400 text-sm hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Brokers */}
              <div>
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
                  Brokers
                </h3>
                <ul className="space-y-3">
                  {brokerLinks.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-slate-400 text-sm hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
                  Contact
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="tel:9093451909"
                      className="text-slate-400 text-sm hover:text-white transition-colors flex items-center gap-2"
                    >
                      <Phone className="h-4 w-4 text-forest-500" />
                      (909) 345-1909
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:Orders@TURF-WORLD.COM"
                      className="text-slate-400 text-sm hover:text-white transition-colors flex items-center gap-2"
                    >
                      <Mail className="h-4 w-4 text-forest-500" />
                      Orders@TURF-WORLD.COM
                    </a>
                  </li>
                  <li className="text-slate-400 text-sm flex items-start gap-2">
                    <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-forest-500" />
                    <span>1970 W Holt Ave<br />Pomona, CA 91768</span>
                  </li>
                  <li className="text-slate-400 text-sm flex items-start gap-2">
                    <Clock className="h-4 w-4 mt-0.5 shrink-0 text-forest-500" />
                    <span>Mon-Fri: 8am-5pm</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-800/50" />

        {/* Bottom Section */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Social Links */}
            <div className="flex items-center gap-1.5">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-forest-600 flex items-center justify-center text-slate-500 hover:text-white transition-all"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              {legalLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-500 text-xs hover:text-slate-300 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-slate-600 text-xs">
              © {new Date().getFullYear()} Turf World. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
