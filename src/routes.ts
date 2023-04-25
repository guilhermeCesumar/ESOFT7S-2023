import { Router } from "express";
import productController from "./products/product.controller";
import stockController from "./stock/stock.controller";

const routes = Router();

routes.post("/product", productController.create);
routes.get("/product", productController.list);
routes.get("/product/:id", productController.find);
routes.put("/product/:id", productController.update);
routes.delete("/product/:id", productController.delete);
routes.get("/products-write", productController.findAndWriteProducts);
routes.get("/products-read", productController.readProducts);

routes.post("/product-stock", stockController.create);
routes.get("/product-stock-random", stockController.chooseRandomProducts);
routes.get("/product-stock-total", stockController.stockTotalValue);

export default routes;
