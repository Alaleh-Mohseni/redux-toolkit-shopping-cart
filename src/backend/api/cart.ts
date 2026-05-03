import { Router } from "express";
import type { Request, Response } from "express";
import type { Cart } from "../types";

const router = Router();

// Store the cart in memory (for testing purposes)
let cart: Cart = { items: [] };

// Get the current cart
router.get("/", (req: Request, res: Response) => {
  res.json(cart);
});

// Add an item to the cart
router.post("/add", (req: Request, res: Response) => {
  const { id, title, price } = req.body;

  if (!id || !title || !price) {
    return res.status(400).json({ message: "اطلاعات ناقص است" });
  }

  const itemIndex = cart.items.findIndex((item) => item.id === id);

  if (itemIndex >= 0) {
    cart.items[itemIndex].quantity++;
  } else {
    cart.items.push({ id, title, price, quantity: 1 });
  }

  res.json(cart);
});

// Remove an item from the cart
router.post("/remove", (req: Request, res: Response) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ message: "شناسه محصول الزامی است" });
  }

  const itemIndex = cart.items.findIndex((item) => item.id === id);

  if (itemIndex === -1) {
    return res.status(404).json({ message: "محصول در سبد خرید یافت نشد" });
  }

  if (cart.items[itemIndex].quantity === 1) {
    cart.items.splice(itemIndex, 1);
  } else {
    cart.items[itemIndex].quantity--;
  }

  res.json(cart);
});

// Clear the entire cart
router.delete("/", (req: Request, res: Response) => {
  cart = { items: [] };
  res.json(cart);
});

// Handle unsupported HTTP methods
router.all(/.*/, (_req: Request, res: Response): void => {
  res.status(405).json({ error: { message: "Method Not Allowed" } });
});

export default router;
