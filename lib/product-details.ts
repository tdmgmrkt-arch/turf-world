export type ProductDetail = {
  id: string;
  description: string;
  tagline?: string;
  specifications: {
    totalWeight: string;
    pileHeight: string;
    yarnShape: string;
    primaryQuality: string;
    primaryColor: string;
    rollSize: string;
    primaryBacking: string;
    warranty: string;
  };
  features: string[];
  images: {
    main: string;
    gallery: string[];
  };
  specSheet?: string;
};

// Product details for each product
export const productDetails: Record<string, ProductDetail> = {
  "olive-73": {
    id: "olive-73",
    description:
      "Olive 73 is a well-balanced product that will compliemnt your landcape whether it be residential or commercial. The tough blade structure and low pile will be reliable and long lasting.",
    tagline: "THE WAVE YARN SHAPE AND MID LEVEL PILE HEIGHT MAKES THIS PRODUCT OUR MOST VERSITILE",
    specifications: {
      totalWeight: "73 oz",
      pileHeight: "1.5 in",
      yarnShape: "Wave",
      primaryQuality: "C8",
      primaryColor: "Olive",
      rollSize: "15X100 ft",
      primaryBacking: "Polyethylene",
      warranty: "16 Years",
    },
    features: [
      "Heat and frost resistant", "Durable yarn shape", "UV stabilized",
    ],
    images: {
      main: "/products/Olive 73.avif",
      gallery: [
        "/products/detail/olive-73-1.png",
        "/products/detail/olive-73-2.png",
        "/products/detail/olive-73-3.png",
      ],
    },
    specSheet: "/specs/Turf-World-Detailed-Specs_Olive-73.pdf",
  },
  // Add more products as needed - this is a template
};

// Default product detail for products without specific details
export const getProductDetail = (productId: string): ProductDetail | null => {
  return productDetails[productId] || null;
};
