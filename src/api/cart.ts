const API_URL = "http://localhost:3001/api";

export async function fetchProducts(search?: string) {
  const url = search
    ? `${API_URL}/products?search=${search}`
    : `${API_URL}/products`;
  const response = await fetch(url);
  return response.json();
}

export async function fetchCart() {
  const response = await fetch(`${API_URL}/cart`);
  return response.json();
}

export async function addToCartAPI(item: {
  id: string;
  title: string;
  price: number;
}) {
  const response = await fetch(`${API_URL}/cart/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
  return response.json();
}

export async function removeFromCartAPI(id: string) {
  const response = await fetch(`${API_URL}/cart/remove`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
  return response.json();
}
