export interface CartItem {
  id: string;
  name: string;
  pricePerSqFt: number; // Price per square foot
  squareFeet: number; // Total square feet for this item
  quantity: number; // Number of rolls/units
  image: string;
  variant?: string; // For different product variants if needed
  specifications?: {
    faceWeight?: string;
    pileHeight?: string;
    color?: string;
  };
}

export interface Cart {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

export interface CartContextType {
  cart: Cart;
  addToCart: (item: Omit<CartItem, 'quantity'>, quantity?: number) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
}
