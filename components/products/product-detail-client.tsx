"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ShoppingCart,
  Download,
  Check,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
} from "lucide-react";
import type { Product } from "@/lib/products-data";
import { getProductDetail } from "@/lib/product-details";
import { useCart } from "@/contexts/cart-context";
import { useRouter } from "next/navigation";
import { getProductPrice, formatPrice } from "@/lib/product-pricing";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProductDetailClientProps {
  product: Product;
}

export function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const productDetail = getProductDetail(product.id);
  const { addToCart } = useCart();
  const router = useRouter();
  const [isAdding, setIsAdding] = useState(false);

  // Pricing and quantity states
  const [squareFeet, setSquareFeet] = useState(150); // Default 15sq x 10 = 150
  const [quantity, setQuantity] = useState(1);
  const pricePerSqFt = getProductPrice(product.id);
  const totalPrice = pricePerSqFt * squareFeet * quantity;

  // Use product detail images or fallback to main product image
  const images = productDetail?.images.gallery.length
    ? [productDetail.images.main, ...productDetail.images.gallery]
    : [product.image];

  const handlePrevImage = () => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Button variant="ghost" asChild className="hover:bg-forest-50 hover:text-forest-700">
          <Link href="/products" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>
        </Button>
      </div>

      <div className="container mx-auto px-4 pb-20">
        {/* Product Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Left Column - Images */}
          <div className="space-y-4">
            {/* Main Image with Navigation */}
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xl">
              <Image
                src={images[selectedImage]}
                alt={`${product.name} - Image ${selectedImage + 1}`}
                fill
                className="object-cover"
                priority
              />

              {/* Image Navigation */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all hover:scale-110"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-6 w-6 text-slate-900" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all hover:scale-110"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-6 w-6 text-slate-900" />
                  </button>
                </>
              )}

              {/* Image Indicators */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === selectedImage
                          ? "w-8 bg-forest-600"
                          : "w-2 bg-slate-400 hover:bg-slate-600"
                      }`}
                      aria-label={`View image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                      index === selectedImage
                        ? "border-forest-600 ring-2 ring-forest-600/30 scale-105"
                        : "border-slate-200 hover:border-forest-300 hover:scale-105"
                    }`}
                    aria-label={`View image ${index + 1}`}
                  >
                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Product Info */}
          <div className="space-y-6">
            {/* Badge */}
            {product.badge && (
              <Badge
                variant="default"
                className="bg-forest-600 hover:bg-forest-700 text-white text-sm font-bold px-4 py-1"
              >
                {product.badge}
              </Badge>
            )}

            {/* Product Name */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 uppercase tracking-tight">
              {product.name}
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              {productDetail?.description ||
                `Premium ${product.name} artificial turf with ${product.yarnType} yarn resin technology.`}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {(productDetail?.features || product.features).map(
                (feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm md:text-base text-slate-700"
                  >
                    <div className="w-5 h-5 rounded-full bg-forest-100 flex items-center justify-center">
                      <Check className="h-3 w-3 text-forest-600" />
                    </div>
                    <span className="font-medium">{feature}</span>
                  </div>
                )
              )}
            </div>

            {/* Specifications Section */}
            {productDetail?.specifications && (
              <div className="space-y-4">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 uppercase">
                    Specifications
                  </h2>
                  <div className="h-1 w-32 bg-forest-500 rounded-full" />
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-lg">
                  <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
                    {Object.entries(productDetail.specifications).map(
                      ([key, value]) => (
                        <div
                          key={key}
                          className="p-4 hover:bg-slate-50 transition-colors"
                        >
                          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </div>
                          <div className="text-lg font-bold text-slate-900">
                            {value}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Pricing and Size Selection */}
            <div className="space-y-4 bg-white border border-slate-200 rounded-2xl p-6 shadow-lg">
              {/* Price Display */}
              <div className="text-center pb-4 border-b border-slate-200">
                <div className="text-sm text-slate-500 mb-2">Price per Square Foot</div>
                <div className="text-3xl font-bold text-forest-600">
                  ${pricePerSqFt.toFixed(2)}/sqft
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Square Footage Selector */}
                <div className="space-y-2">
                  <Label htmlFor="squareFeet" className="text-sm font-semibold text-slate-700">
                    Square Footage (15ft wide)
                  </Label>
                  <Select
                    value={squareFeet.toString()}
                    onValueChange={(value) => setSquareFeet(parseInt(value))}
                  >
                    <SelectTrigger id="squareFeet" className="bg-white border-slate-200 rounded-xl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((ft) => (
                        <SelectItem key={ft} value={(ft * 15).toString()}>
                          {ft * 15} sqft (15ft x {ft}ft)
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Quantity Selector */}
                <div className="space-y-2">
                  <Label htmlFor="quantity" className="text-sm font-semibold text-slate-700">
                    Quantity (Rolls)
                  </Label>
                  <div className="flex items-center gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      className="border-slate-200 rounded-xl"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <input
                      type="number"
                      id="quantity"
                      min="1"
                      max="100"
                      value={quantity}
                      onChange={(e) => {
                        const val = parseInt(e.target.value) || 1;
                        setQuantity(Math.min(100, Math.max(1, val)));
                      }}
                      className="w-20 h-10 text-center text-lg font-semibold border border-slate-200 rounded-xl bg-white"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      className="border-slate-200 rounded-xl"
                      onClick={() => setQuantity(Math.min(100, quantity + 1))}
                      disabled={quantity >= 100}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Total Price Display */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                <div className="text-sm text-slate-500 mb-1">Total Price</div>
                <div className="text-2xl font-bold text-slate-900">
                  ${totalPrice.toFixed(2)}
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  {squareFeet} sqft × {quantity} roll{quantity !== 1 ? "s" : ""} × ${pricePerSqFt.toFixed(2)}/sqft
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                size="lg"
                className="flex-1 bg-forest-600 hover:bg-forest-700 text-white font-bold rounded-xl px-8 shadow-lg shadow-forest-600/25"
                onClick={() => {
                  setIsAdding(true);
                  addToCart({
                    id: product.id,
                    name: product.name,
                    pricePerSqFt: pricePerSqFt,
                    squareFeet: squareFeet,
                    image: product.image,
                    specifications: productDetail?.specifications,
                  }, quantity);
                  setTimeout(() => {
                    setIsAdding(false);
                    router.push("/cart");
                  }, 500);
                }}
                disabled={isAdding}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                {isAdding ? "Adding..." : "Add to Cart"}
              </Button>

              {productDetail?.specSheet && (
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 border-slate-200 hover:bg-forest-50 hover:border-forest-200 hover:text-forest-700 rounded-xl"
                  asChild
                >
                  <a
                    href={productDetail.specSheet}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    View Full Spec Sheet
                  </a>
                </Button>
              )}
            </div>

            {/* Contact CTA */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4">
              <p className="text-sm text-slate-600 font-medium">
                Need help choosing? Our experts are here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-200 hover:bg-forest-600 hover:text-white hover:border-forest-600 rounded-xl"
                  asChild
                >
                  <a href="tel:9093451909">(909) 345-1909</a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-200 hover:bg-forest-600 hover:text-white hover:border-forest-600 rounded-xl"
                  asChild
                >
                  <Link href="/request-samples">Request Samples</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Tagline Section */}
        {productDetail?.tagline && (
          <div className="mb-16">
            <div className="relative max-w-5xl mx-auto bg-slate-900 rounded-3xl p-8 md:p-12 text-center shadow-2xl overflow-hidden">
              {/* Accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-forest-500" />

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-forest-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-forest-500/10 rounded-full translate-y-1/2 -translate-x-1/2" />

              <p className="relative z-10 text-xl md:text-2xl lg:text-3xl font-bold text-white leading-relaxed">
                {productDetail.tagline}
              </p>
            </div>
          </div>
        )}

        {/* Bottom Navigation */}
        <div className="text-center space-y-4">
          <Button
            variant="outline"
            size="lg"
            className="border-slate-200 hover:bg-forest-600 hover:text-white hover:border-forest-600 rounded-xl"
            asChild
          >
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
