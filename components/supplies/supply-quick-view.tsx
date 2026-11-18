"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  ShoppingCart,
  Plus,
  Minus,
  CheckCircle,
  ExternalLink,
  X,
} from "lucide-react";
import type { Supply } from "@/lib/supplies-data";
import { useCart } from "@/contexts/cart-context";
import { cn } from "@/lib/utils";

interface SupplyQuickViewProps {
  supply: Supply;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SupplyQuickView({
  supply,
  open,
  onOpenChange,
}: SupplyQuickViewProps) {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();

  const totalPrice = supply.price * quantity;

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(
      {
        id: supply.id,
        name: supply.name,
        image: supply.image,
        pricePerSqFt: supply.price,
        squareFeet: 1,
        variant: supply.unit,
      },
      quantity
    );
    setTimeout(() => {
      setIsAdding(false);
      setQuantity(1);
      onOpenChange(false);
    }, 500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden bg-card border-border">
        {/* Close button */}
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 z-10 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Section */}
          <div className="relative aspect-square bg-muted">
            {/* Badge */}
            {supply.badge && (
              <div className="absolute top-4 left-4 z-10">
                <Badge
                  variant={supply.badge === "Sale" ? "destructive" : "default"}
                  className={cn(
                    "text-xs font-bold shadow-lg",
                    supply.badge !== "Sale" &&
                      "bg-linear-to-r from-emerald-500 to-blue-accent"
                  )}
                >
                  {supply.badge}
                </Badge>
              </div>
            )}

            <Image
              src={supply.image}
              alt={supply.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="p-6 flex flex-col">
            <DialogHeader className="text-left mb-4">
              <DialogTitle className="text-2xl font-bold uppercase">
                {supply.name}
              </DialogTitle>
            </DialogHeader>

            {/* Description */}
            <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
              {supply.fullDescription}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-2 mb-4">
              {supply.features.slice(0, 3).map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1 text-xs text-foreground bg-muted px-2 py-1 rounded-full"
                >
                  <CheckCircle className="h-3 w-3 text-emerald-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Product Info */}
            <div className="bg-muted/50 rounded-lg p-3 mb-4">
              <div className="text-xs font-semibold text-muted-foreground uppercase mb-1">
                Product Info
              </div>
              {supply.productInfo.weight && (
                <div className="text-sm font-medium">
                  Weight: {supply.productInfo.weight}
                </div>
              )}
              {supply.productInfo.rollSize && (
                <div className="text-sm font-medium">
                  Roll Size: {supply.productInfo.rollSize}
                </div>
              )}
              {supply.productInfo.boxSize && (
                <div className="text-sm font-medium">
                  Box Size: {supply.productInfo.boxSize}
                </div>
              )}
            </div>

            {/* Price */}
            <div className="mb-4">
              {supply.isFree ? (
                <div className="text-2xl font-black gradient-text">FREE</div>
              ) : (
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-foreground">
                    ${supply.price.toFixed(2)}
                  </span>
                  {supply.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${supply.originalPrice.toFixed(2)}
                    </span>
                  )}
                  <span className="text-sm text-muted-foreground">
                    {supply.unit}
                  </span>
                </div>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm text-muted-foreground">Qty:</span>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-3 w-3" />
                </Button>
                <span className="text-lg font-semibold w-8 text-center">
                  {quantity}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
              {!supply.isFree && quantity > 1 && (
                <span className="text-sm text-muted-foreground ml-auto">
                  Total: ${totalPrice.toFixed(2)}
                </span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="mt-auto space-y-3">
              <Button
                className="w-full bg-linear-to-r from-emerald-500 to-blue-accent hover:opacity-90 text-white transition-all rounded-full"
                onClick={handleAddToCart}
                disabled={isAdding}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                {isAdding ? "Adding..." : "Add to Cart"}
              </Button>

              <Button
                variant="outline"
                className="w-full rounded-full"
                asChild
              >
                <Link href={`/supplies/${supply.id}`}>
                  View Full Details
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
