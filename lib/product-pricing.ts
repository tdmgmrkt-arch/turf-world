/**
 * Product Pricing Database
 *
 * All prices are per square foot.
 * To update pricing, simply modify the pricePerSqFt value for each product.
 *
 * Default pricing: $1.32/sqft for products not listed below
 */

export interface ProductPricing {
  id: string;
  name: string;
  pricePerSqFt: number;
}

export const productPricing: ProductPricing[] = [
  {
    id: "california-65",
    name: "California 65",
    pricePerSqFt: 1.09,
  },
  {
    id: "hawaii-80",
    name: "Hawaii 80",
    pricePerSqFt: 1.95,
  },
  {
    id: "florida-80",
    name: "Florida 80",
    pricePerSqFt: 1.95,
  },
  {
    id: "colorado-80",
    name: "Colorado 80",
    pricePerSqFt: 2.15,
  },
  {
    id: "hawaii-87",
    name: "Hawaii 87",
    pricePerSqFt: 2.15,
  },
  {
    id: "idaho-93",
    name: "Idaho 93",
    pricePerSqFt: 2.30,
  },
  {
    id: "nevada-95",
    name: "Nevada 95",
    pricePerSqFt: 2.25,
  },
  {
    id: "kansas-95",
    name: "Kansas 95",
    pricePerSqFt: 2.30,
  },
  {
    id: "colorado-95",
    name: "Colorado 95",
    pricePerSqFt: 2.45,
  },
  {
    id: "hawaii-96",
    name: "Hawaii 96",
    pricePerSqFt: 2.30,
  },
  {
    id: "super-realistic-96",
    name: "Super Realistic 96",
    pricePerSqFt: 2.75,
  },
  {
    id: "texas-108",
    name: "Texas 108",
    pricePerSqFt: 2.99,
  },
  {
    id: "nevada-110",
    name: "Nevada 110",
    pricePerSqFt: 2.85,
  },
  {
    id: "super-realistic-120",
    name: "Super Realistic 120",
    pricePerSqFt: 3.25,
  },
  {
    id: "texas-130",
    name: "Texas 130",
    pricePerSqFt: 3.25,
  },
  {
    id: "thousand-pine-putt",
    name: "Thousand Pine Putt",
    pricePerSqFt: 2.30,
  },
  {
    id: "olive-109",
    name: "Olive 109",
    pricePerSqFt: 1.29,
  },
];

// Default price for products not in the pricing list
export const DEFAULT_PRICE_PER_SQFT = 1.32;

/**
 * Get the price per square foot for a product
 * Returns default price if product not found
 */
export function getProductPrice(productId: string): number {
  const product = productPricing.find((p) => p.id === productId);
  return product ? product.pricePerSqFt : DEFAULT_PRICE_PER_SQFT;
}

/**
 * Calculate total price based on square footage
 */
export function calculatePrice(productId: string, squareFeet: number): number {
  const pricePerSqFt = getProductPrice(productId);
  return pricePerSqFt * squareFeet;
}

/**
 * Format price for display
 */
export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}
