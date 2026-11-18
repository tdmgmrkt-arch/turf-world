"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingCart, User, Menu, X, ChevronDown, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/contexts/cart-context";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  type MegaMenuCategory = {
    title: string;
    items: { name: string; href: string }[];
  };

  type MegaMenuConfig = {
    categories: MegaMenuCategory[];
  };

  const megaMenus: Record<string, MegaMenuConfig> = {
    Products: {
      categories: [
        {
          title: "Shop By Type",
          items: [
            { name: "All Products", href: "/products" },
            { name: "Pet Turf", href: "/products?category=pet" },
            { name: "Putting Greens", href: "/products?category=putting" },
            { name: "Supplies & Accessories", href: "/supplies" },
          ],
        },
        {
          title: "Best Sellers",
          items: [
            { name: "Olive 73", href: "/products/olive-73" },
            { name: "Bermuda 87", href: "/products/bermuda-87" },
            { name: "Winter Breeze 108", href: "/products/winter-breeze-108" },
            { name: "Request Free Samples", href: "/request-samples" },
          ],
        },
      ],
    },
    Brokers: {
      categories: [
        {
          title: "Partner With Us",
          items: [
            { name: "Broker Program Overview", href: "/brokers/program" },
            { name: "Product Training", href: "/brokers/training" },
            { name: "Apply to Become a Broker", href: "/brokers/apply" },
          ],
        },
      ],
    },
    Resources: {
      categories: [
        {
          title: "Help & Support",
          items: [
            { name: "Installation Guide", href: "/resources/installation" },
            { name: "Product Specifications", href: "/resources/specs" },
            { name: "Frequently Asked Questions", href: "/faq" },
          ],
        },
      ],
    },
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-slate-900/5"
          : "bg-white"
      )}
    >
      {/* Top Bar - Sleek & Minimal */}
      <div
        className={cn(
          "bg-slate-900 text-white transition-all duration-300 overflow-hidden",
          isScrolled ? "h-0 opacity-0" : "h-10 opacity-100"
        )}
      >
        <div className="container mx-auto px-4 h-full">
          <div className="flex h-full items-center justify-between text-xs">
            <div className="flex items-center gap-8">
              <a
                href="tel:9093451909"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                <span className="font-medium">(909) 345-1909</span>
              </a>
              <div className="hidden md:flex items-center gap-2 text-slate-400">
                <MapPin className="h-3.5 w-3.5" />
                <span>Pomona, CA</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <span className="hidden sm:block text-slate-400">
                Wholesale Pricing Available
              </span>
              <Link
                href="/products"
                className="bg-forest-600 hover:bg-forest-700 text-white font-semibold px-4 py-1.5 rounded transition-colors"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div
            className={cn(
              "flex items-center justify-between gap-6 transition-all duration-300",
              isScrolled ? "h-16" : "h-20"
            )}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/twlogo2.png"
                alt="Turf World"
                width={180}
                height={60}
                className={cn(
                  "h-auto w-auto transition-all duration-300",
                  isScrolled ? "max-h-9" : "max-h-12"
                )}
                priority
              />
            </Link>

            {/* Desktop Navigation - Integrated */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link
                href="/"
                className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-forest-700 rounded-lg hover:bg-slate-50 transition-all"
              >
                Home
              </Link>
              {Object.keys(megaMenus).map((menuName) => (
                <div
                  key={menuName}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(menuName)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-all",
                      activeMenu === menuName
                        ? "text-forest-700 bg-forest-50"
                        : "text-slate-700 hover:text-forest-700 hover:bg-slate-50"
                    )}
                  >
                    {menuName}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        activeMenu === menuName && "rotate-180"
                      )}
                    />
                  </button>

                  {/* Mega Menu Dropdown */}
                  {activeMenu === menuName && (
                    <div className="absolute left-0 top-full pt-2 z-50">
                      <div className="bg-white border border-slate-200 rounded-2xl shadow-2xl shadow-slate-900/10 p-6 min-w-[420px] animate-scale-in">
                        <div className="grid grid-cols-2 gap-6">
                          {megaMenus[menuName as keyof typeof megaMenus].categories.map(
                            (category, idx) => (
                              <div key={idx}>
                                <h3 className="text-xs font-bold text-slate-400 mb-3 uppercase tracking-wider">
                                  {category.title}
                                </h3>
                                <ul className="space-y-1">
                                  {category.items.map((item, itemIdx) => (
                                    <li key={itemIdx}>
                                      <Link
                                        href={item.href}
                                        className="text-sm text-slate-600 hover:text-forest-700 hover:bg-forest-50 transition-all block py-2 px-3 rounded-lg -mx-3"
                                      >
                                        {item.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/request-samples"
                className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-forest-700 rounded-lg hover:bg-slate-50 transition-all"
              >
                Samples
              </Link>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Desktop Search */}
              <div className="hidden lg:block relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-10 pr-4 h-10 w-64 bg-slate-50 border-0 rounded-xl text-sm focus-visible:ring-2 focus-visible:ring-forest-600 focus-visible:bg-white transition-all"
                />
              </div>

              {/* Mobile Search Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search className="h-5 w-5" />
              </Button>

              {/* Shopping Cart */}
              <Button
                variant="ghost"
                size="icon"
                className="relative text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl"
                asChild
              >
                <Link href="/cart">
                  <ShoppingCart className="h-5 w-5" />
                  {cart.totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-[10px] font-bold bg-forest-600 text-white rounded-full">
                      {cart.totalItems}
                    </span>
                  )}
                </Link>
              </Button>

              {/* User Account */}
              <Button
                variant="ghost"
                size="sm"
                className="hidden md:flex text-slate-600 hover:text-slate-900 hover:bg-slate-100 gap-2 rounded-xl"
                asChild
              >
                <Link href="/login">
                  <User className="h-4 w-4" />
                  <span className="text-sm font-medium">Login</span>
                </Link>
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          {isSearchOpen && (
            <div className="pb-4 lg:hidden animate-fade-up">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-11 pr-4 h-12 bg-slate-50 border-0 rounded-xl"
                  autoFocus
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 animate-slide-down">
          <nav className="container mx-auto px-4 py-6">
            <div className="space-y-1">
              <Link
                href="/"
                className="block py-3 px-4 text-base font-medium text-slate-700 hover:text-forest-700 hover:bg-forest-50 rounded-xl transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/products"
                className="block py-3 px-4 text-base font-medium text-slate-700 hover:text-forest-700 hover:bg-forest-50 rounded-xl transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/supplies"
                className="block py-3 px-4 text-base font-medium text-slate-700 hover:text-forest-700 hover:bg-forest-50 rounded-xl transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Supplies
              </Link>
              <Link
                href="/brokers/program"
                className="block py-3 px-4 text-base font-medium text-slate-700 hover:text-forest-700 hover:bg-forest-50 rounded-xl transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Broker Program
              </Link>
              <Link
                href="/request-samples"
                className="block py-3 px-4 text-base font-medium text-slate-700 hover:text-forest-700 hover:bg-forest-50 rounded-xl transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Request Samples
              </Link>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-100">
              <Button
                className="w-full bg-forest-700 hover:bg-forest-800 text-white font-semibold rounded-xl h-12"
                asChild
              >
                <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <User className="h-4 w-4 mr-2" />
                  Login / Sign Up
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
