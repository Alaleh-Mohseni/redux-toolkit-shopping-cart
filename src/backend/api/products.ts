import { Router } from "express";
import type { Request, Response } from "express";
import { products } from "../data";

const router = Router();

// Get the list of products
router.get("/", (req: Request, res: Response) => {
  const search = req.query.search as string;

  if (search) {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase()),
    );
    return res.json(filtered);
  }

  res.json(products);
});

// Get a single product by id
router.get("/:id", (req: Request, res: Response) => {
  const product = products.find((p) => p.id === req.params.id);

  if (!product) {
    return res.status(404).json({ message: "محصول یافت نشد" });
  }

  res.json(product);
});

// Handle unsupported HTTP methods
router.all(/.*/, (_req: Request, res: Response): void => {
  res.status(405).json({ error: { message: "Method Not Allowed" } });
});

export default router;
