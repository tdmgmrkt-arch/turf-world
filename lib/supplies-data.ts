export type Supply = {
  id: string;
  name: string;
  price: number;
  originalPrice: number | null;
  image: string;
  badge: string | null;
  description: string;
  unit: string;
  isFree?: boolean;
  productInfo: {
    weight?: string;
    rollSize?: string;
    boxSize?: string;
  };
  fullDescription: string;
  features: string[];
};

export const supplies: Supply[] = [
  {
    id: "zeofill",
    name: "ZeoFill",
    price: 21.0,
    originalPrice: null,
    image: "/ZeoFill.webp",
    badge: null,
    description: "Premium zeolite infill for artificial turf",
    unit: "per bag",
    productInfo: {
      weight: "50 lbs per Bag",
    },
    fullDescription:
      "Zeofill is an all natural turf infill made from pumice. Organic, safe, and dust free, Zeofill is one of the only infills that actually fights odors.",
    features: ["All Natural", "Odor Fighting", "Dust Free", "Organic & Safe"],
  },
  {
    id: "silica-sand-60",
    name: "SILICA SAND 60 GRIT INFILL",
    price: 9.49,
    originalPrice: null,
    image: "/Silica.Sand.webp",
    badge: null,
    description: "Fine 60 grit silica sand for turf infill",
    unit: "per bag",
    productInfo: {
      weight: "50 lbs per Bag",
    },
    fullDescription:
      "Our 60 grit silica sand infill provides superior blade support and a reduced absorption rate which allows it last longer. This infill also provides exceptional support for putting greens, reflecting realistic putting green stimp speeds so you can enjoy your game.",
    features: [
      "Superior Blade Support",
      "Reduced Absorption",
      "Long Lasting",
      "Ideal for Putting Greens",
    ],
  },
  {
    id: "camo-fill",
    name: "CAMO FILL",
    price: 21.0,
    originalPrice: null,
    image: "/Camo.Fill.webp",
    badge: "Best Seller",
    description: "Camouflage colored infill for natural look",
    unit: "per bag",
    productInfo: {
      weight: "50 lbs per Bag",
    },
    fullDescription:
      "Camofill is designed for use with multi-color thatch, made with a specially sourced blend of multiple colors for the most natural look possible. Being safe for children and pets, this all-purpose infill can be used as infill for artificial lawns, playgrounds, and putting greens.",
    features: [
      "ZOE Antimicrobial Coating",
      "Reduces Pet Urine Odors",
      "Made in the USA",
      "Safe for Children & Pets",
    ],
  },
  {
    id: "silica-sand-16",
    name: "SILICA SAND 16 GRIT INFILL",
    price: 9.49,
    originalPrice: null,
    image: "/Silica.Sand.webp",
    badge: null,
    description: "Coarse 16 grit silica sand for turf infill",
    unit: "per bag",
    productInfo: {
      weight: "50 lbs per Bag",
    },
    fullDescription:
      "Our 16 grit silica sand infill provides superior blade support and a reduced absorption rate which allows it last longer. This infill also provides exceptional support for artificial turf blades that will keep your turf looking new for years to come.",
    features: [
      "Superior Blade Support",
      "Reduced Absorption",
      "Long Lasting",
      "Keeps Turf Looking New",
    ],
  },
  {
    id: "gofer-wire",
    name: "GOFER WIRE",
    price: 179.0,
    originalPrice: null,
    image: "/Gofer.Wire.webp",
    badge: "Best Seller",
    description: "Heavy-duty gopher wire protection",
    unit: "per roll",
    productInfo: {
      rollSize: "4x100",
    },
    fullDescription:
      "Rust resistant, double galvanized mesh helps to keep the Gophers out and protects your artificial lawn or shrubs. Install under lawns, around planting root balls and in ground any where you want to protect your landscape.",
    features: [
      "Rust Resistant",
      "Double Galvanized",
      "Gopher Protection",
      "Landscape Protection",
    ],
  },
  {
    id: "nails-5",
    name: 'NAILS 5"',
    price: 92.0,
    originalPrice: null,
    image: "/Nails.5.webp",
    badge: "Best Seller",
    description: "5 inch galvanized turf nails",
    unit: "per box",
    productInfo: {
      boxSize: "50 lbs",
    },
    fullDescription:
      'These 5" non-galvanized steel nails are made strong to keep turf in place. These nails can be used in both residential and commercial installation projects. 40D nails are designed to promote rust which helps lock your turf installation in place by bonding with the ground.',
    features: [
      "Heavy Duty Steel",
      "Rust-Bond Technology",
      "Residential & Commercial",
      "Secure Installation",
    ],
  },
  {
    id: "seam-tape",
    name: "SEAM TAPE",
    price: 0.0,
    originalPrice: null,
    image: "/Seam.Tape.webp",
    badge: null,
    description: "Professional seam joining tape",
    unit: "per roll",
    isFree: true,
    productInfo: {
      rollSize: "6 inches x 100 feet",
    },
    fullDescription:
      "Professional-grade seam tape designed for seamless turf installation. Our high-strength adhesive backing ensures permanent bonds between turf sections, creating invisible seams that withstand heavy foot traffic and weather conditions.",
    features: [
      "High-Strength Adhesive",
      "Weather Resistant",
      "Invisible Seams",
      "Professional Grade",
    ],
  },
  {
    id: "weed-barrier",
    name: "WEED BARRIER",
    price: 199.0,
    originalPrice: 249.0,
    image: "/Weed.Barrier.webp",
    badge: "Sale",
    description: "Premium weed barrier fabric",
    unit: "per roll",
    productInfo: {
      rollSize: "6x300",
    },
    fullDescription:
      "Weed barrier is used to prevent weeds from growing through your landscaping. Our weed barrier does not contain absorbent materials which allows liquid to flow through, minimizing odors.",
    features: [
      "Weed Prevention",
      "Non-Absorbent",
      "Liquid Flow-Through",
      "Odor Minimizing",
    ],
  },
];

export function getSupplyById(id: string): Supply | undefined {
  return supplies.find((supply) => supply.id === id);
}
