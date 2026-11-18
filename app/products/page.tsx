"use client";

import { useState, useMemo } from "react";
import { products } from "@/lib/products-data";
import { ProductCard } from "@/components/products/product-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, SlidersHorizontal, Leaf } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FilterType = "all" | "C4" | "C8";
type SortType = "name-asc" | "name-desc";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [yarnFilter, setYarnFilter] = useState<FilterType>("all");
  const [sortBy, setSortBy] = useState<SortType>("name-asc");
  const [showFilters, setShowFilters] = useState(false);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Yarn type filter
    if (yarnFilter !== "all") {
      filtered = filtered.filter((product) => product.yarnType === yarnFilter);
    }

    // Sort
    filtered.sort((a, b) => {
      if (sortBy === "name-asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

    return filtered;
  }, [searchQuery, yarnFilter, sortBy]);

  const resetFilters = () => {
    setSearchQuery("");
    setYarnFilter("all");
    setSortBy("name-asc");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
        {/* Accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-forest-500" />

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-forest-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-forest-500/10 rounded-full blur-3xl" />

        <div className="container relative mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-6">
              <Leaf className="h-4 w-4 text-forest-400" />
              <span className="text-sm font-semibold text-white">Premium Collection</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Standard Products
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-6">
              Premium Artificial Turf Collection
            </p>
            <div className="h-1 w-32 mx-auto bg-forest-500 rounded-full" />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Filters Section */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between mb-6">
            {/* Search Bar */}
            <div className="relative w-full lg:w-96 group">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 group-focus-within:text-forest-600 transition-colors" />
              <Input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-11 rounded-xl border-slate-200 bg-white focus-visible:ring-forest-500 focus-visible:border-forest-500"
              />
            </div>

            {/* Filter Toggle (Mobile) */}
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden w-full border-slate-200"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters & Sort
            </Button>

            {/* Desktop Filters */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Yarn Type Filter */}
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4 text-slate-400" />
                <Select
                  value={yarnFilter}
                  onValueChange={(value) => setYarnFilter(value as FilterType)}
                >
                  <SelectTrigger className="w-[180px] rounded-xl border-slate-200 bg-white focus:ring-forest-500">
                    <SelectValue placeholder="Filter by Yarn" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Yarn Types</SelectItem>
                    <SelectItem value="C4">C4 Yarn</SelectItem>
                    <SelectItem value="C8">C8 Yarn</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Sort */}
              <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortType)}>
                <SelectTrigger className="w-[180px] rounded-xl border-slate-200 bg-white focus:ring-forest-500">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                  <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                </SelectContent>
              </Select>

              {/* Reset Button */}
              {(searchQuery || yarnFilter !== "all" || sortBy !== "name-asc") && (
                <Button variant="outline" size="sm" onClick={resetFilters} className="border-slate-200 hover:bg-forest-50 hover:text-forest-700 hover:border-forest-200">
                  Reset Filters
                </Button>
              )}
            </div>
          </div>

          {/* Mobile Filters Panel */}
          {showFilters && (
            <div className="lg:hidden space-y-4 p-6 bg-white border border-slate-200 rounded-2xl mb-6 shadow-lg">
              {/* Yarn Type Filter */}
              <div>
                <label className="text-sm font-semibold mb-2 block text-slate-900">Yarn Type</label>
                <Select
                  value={yarnFilter}
                  onValueChange={(value) => setYarnFilter(value as FilterType)}
                >
                  <SelectTrigger className="rounded-xl border-slate-200">
                    <SelectValue placeholder="Filter by Yarn" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Yarn Types</SelectItem>
                    <SelectItem value="C4">C4 Yarn</SelectItem>
                    <SelectItem value="C8">C8 Yarn</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Sort */}
              <div>
                <label className="text-sm font-semibold mb-2 block text-slate-900">Sort By</label>
                <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortType)}>
                  <SelectTrigger className="rounded-xl border-slate-200">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                    <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Reset Button */}
              {(searchQuery || yarnFilter !== "all" || sortBy !== "name-asc") && (
                <Button variant="outline" className="w-full border-slate-200" onClick={resetFilters}>
                  Reset All Filters
                </Button>
              )}
            </div>
          )}

          {/* Active Filters Display */}
          {(searchQuery || yarnFilter !== "all") && (
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-sm text-slate-500">Active filters:</span>
              {searchQuery && (
                <Badge variant="secondary" className="gap-2 rounded-full bg-forest-100 text-forest-700 hover:bg-forest-200">
                  Search: {searchQuery}
                  <button
                    onClick={() => setSearchQuery("")}
                    className="hover:text-red-600"
                  >
                    ×
                  </button>
                </Badge>
              )}
              {yarnFilter !== "all" && (
                <Badge variant="secondary" className="gap-2 rounded-full bg-forest-100 text-forest-700 hover:bg-forest-200">
                  {yarnFilter} Yarn
                  <button
                    onClick={() => setYarnFilter("all")}
                    className="hover:text-red-600"
                  >
                    ×
                  </button>
                </Badge>
              )}
            </div>
          )}

          {/* Results Count */}
          <div className="text-sm text-slate-500">
            Showing <span className="font-bold text-slate-900">{filteredProducts.length}</span> of{" "}
            <span className="font-bold text-slate-900">{products.length}</span> products
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-100 mb-6">
              <Search className="h-10 w-10 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">No products found</h3>
            <p className="text-slate-500 mb-6">
              Try adjusting your search or filters
            </p>
            <Button variant="outline" onClick={resetFilters} className="border-slate-200 hover:bg-forest-50 hover:text-forest-700">
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
