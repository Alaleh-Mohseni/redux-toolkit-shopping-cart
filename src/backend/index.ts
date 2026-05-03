import { Router } from "express";
import productsRouter from "./api/products";
import cartRouter from "./api/cart";

const router = Router();

router.use("/products", productsRouter);
router.use("/cart", cartRouter);

export default router;
