export interface Product {
  id: string;
  title: string;
  ml: string;
  price: number;
  image: string;
}

export interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
}
